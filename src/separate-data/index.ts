import separateArrayData from './array';
import separateObjectData from './object';
import { isDbArray, isDbObject } from '../utils';
import { SeparatedObject, UserData } from '../helpers';

export function separateData(
  unmodifiedData: UserData,
  uniqueId: string,
  isInline = false
): SeparatedObject {
  if (isDbArray(unmodifiedData, uniqueId)) {
    return separateArrayData(unmodifiedData, nestedObj =>
      separateData(nestedObj, uniqueId, true)
    );
  }
  if (isDbObject(unmodifiedData, uniqueId)) {
    return separateObjectData(unmodifiedData, uniqueId, nestedObj =>
      separateData(nestedObj, uniqueId, true)
    );
  }
  if (!isInline) {
    return unmodifiedData;
  }
  return null;
}
