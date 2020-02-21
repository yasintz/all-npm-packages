import { objectForeach, isDbObject, isDbArray } from '../utils';

function separateObjectData(
  unmodifiedData: Record<string, any>,
  uniqueId: string,
  baseSeparateFn: (obj: any) => any
) {
  const modifiedData: Record<string, any> = {};
  const dataId = unmodifiedData[uniqueId];

  modifiedData[dataId] = modifiedData[dataId] || {};

  objectForeach(unmodifiedData, (key, dataField) => {
    if (isDbObject(dataField, uniqueId) || isDbArray(dataField, uniqueId)) {
      Object.assign(modifiedData, baseSeparateFn(dataField));
    } else {
      modifiedData[dataId][key] = dataField;
    }
  });

  return modifiedData;
}

export default separateObjectData;
