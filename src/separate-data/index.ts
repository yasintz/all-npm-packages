import separateArrayData from './array';
import separateObjectData from './object';
import { isDbArray, isDbObject } from '../utils';
import { SeparatedObject, UserData } from '../helpers';

export function separateData(
  unmodifiedData: UserData,
  uniqueId: string,
  isReturnNull = false,
  modifiedData: Record<string, any> = {}
): SeparatedObject {
  if (isDbArray(unmodifiedData, uniqueId)) {
    return separateArrayData(unmodifiedData, modifiedData, nestedObj =>
      separateData(nestedObj, uniqueId, true, modifiedData)
    );
  }
  if (isDbObject(unmodifiedData, uniqueId)) {
    return separateObjectData(
      unmodifiedData,
      uniqueId,
      modifiedData,
      nestedObj => separateData(nestedObj, uniqueId, true, modifiedData)
    );
  }
  if (!isReturnNull) {
    return unmodifiedData;
  }
  return null;
}
