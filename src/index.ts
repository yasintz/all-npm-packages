import { UserData, Schema } from './helpers';
import { separateData } from './separate-data';
import dataToSchema from './data-to-schema';
import schemaToData from './schema-to-data';

function createModule(uniqueId = 'id') {
  return {
    schemaToData,
    separateData: (data: UserData, isReturnNull?: boolean) =>
      separateData(data, uniqueId, isReturnNull),
    dataToSchema: (data: UserData) => dataToSchema(data, uniqueId),
  };
}

export function withCustomUniqueId(id: string) {
  return createModule(id);
}

export default createModule();
export { Schema };
