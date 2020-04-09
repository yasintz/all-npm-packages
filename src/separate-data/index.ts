import separateArrayData from './array';
import separateObjectData from './object';
import { isDbObject, isArray } from '../utils';
import { SeparatedObject, UserData } from '../helpers';

function ejectInvalidItemInArray<T>(array: T[], uniqueIdKey: string): T[] {
  return array.filter(item => {
    return isDbObject(item, uniqueIdKey) || isArray(item);
  });
}

export function separateData(
  unmodifiedData: UserData,
  uniqueIdKey: string,
  modifiedData: Record<string, any> = {}
): SeparatedObject {
  if (isArray(unmodifiedData)) {
    return separateArrayData(
      ejectInvalidItemInArray(unmodifiedData, uniqueIdKey),
      modifiedData,
      nestedObj => separateData(nestedObj, uniqueIdKey, modifiedData)
    );
  }
  if (isDbObject(unmodifiedData, uniqueIdKey)) {
    return separateObjectData(
      unmodifiedData,
      uniqueIdKey,
      modifiedData,
      nestedObj => separateData(nestedObj, uniqueIdKey, modifiedData)
    );
  }
  return unmodifiedData;
}
