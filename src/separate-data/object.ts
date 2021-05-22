import { objectForeach } from '../utils';

function separateObjectData(
  unmodifiedData: Record<string, any>,
  uniqueId: string,
  modifiedData: any,
  baseSeparateFn: (obj: any) => any
) {
  const dataId = unmodifiedData[uniqueId];

  modifiedData[dataId] = modifiedData[dataId] || {};

  objectForeach(unmodifiedData, (key, dataField) => {
    const parsedObject = baseSeparateFn(dataField);
    if (parsedObject === dataField) {
      modifiedData[dataId][key] = dataField;
    } else {
      Object.assign(modifiedData, parsedObject);
    }
  });

  return modifiedData;
}

export default separateObjectData;
