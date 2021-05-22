import { Module, withCustomUniqueId } from '.';

function objectKeys<K extends string>(obj: Record<K, any>): K[] {
  return Object.keys(obj) as K[];
}

class RouteSchema {
  private _module: Module;

  constructor(pk = 'id') {
    this._module = withCustomUniqueId(pk);
  }

  rawStore: Record<string, any> = {};
  schemaStore: Record<string, any> = {};

  add = (id: string, data: any) => {
    const schema = this._module.dataToSchema(data);
    const separatedData = this._module.separateData(data);

    this.addRawData(separatedData);

    this.schemaStore[id] = schema;
  };

  private addRawData = (data: any) => {
    const modifiedData: Record<string, any> = {};
    const raw = this.rawStore;
    objectKeys(data).forEach(key => {
      const rawItem = raw[key] || data[key];
      modifiedData[key] = Object.assign(rawItem, data[key]);
    });

    Object.assign(this.rawStore, modifiedData);
  };

  getByPrimaryKey = (pk: string) => this.rawStore[pk];
  getById = (id: string) => {
    const schema = this.schemaStore[id];
    if (!schema) {
      return null;
    }

    return this._module.schemaToData(schema, this.rawStore);
  };
}

export default RouteSchema;
