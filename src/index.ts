import schemaToData from '~/schema-to-data';
import { UserData } from '~/helpers';
import { separateData } from '~/separate-data';
import dataToSchema from '~/data-to-schema';

function createModule(uniqueId = 'id') {
  return {
    schemaToData,
    separateData: (data: UserData) => separateData(data, uniqueId),
    dataToSchema: (data: UserData) => dataToSchema(data, uniqueId),
  };
}

export function withCustomUniqueId(id: string) {
  return createModule(id);
}

export default createModule();
