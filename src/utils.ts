import { MaybeArray } from './helpers';

export const isObject = (o: any) =>
  !isArray(o) && typeof o === 'object' && o !== null && o !== undefined;

export function isArray<T>(o: MaybeArray<T>): o is Array<T> {
  return Array.isArray(o);
}

export function objectForeach<K extends string, V>(
  obj: Record<K, V>,
  callback: (key: K, value: V) => void
) {
  Object.keys(obj).forEach(key => callback(key as K, obj[key as K]));
}

export function isDbObject(obj: any, uniqueId: string) {
  if (isObject(obj) && obj[uniqueId]) {
    return true;
  }

  return false;
}

export function isDbArray<T>(
  obj: MaybeArray<T>,
  uniqueId: string
): obj is Array<T> {
  // FIXME: remove nested if
  if (isArray(obj)) {
    if (
      obj.filter(
        item => isDbObject(item, uniqueId) || isDbArray(item, uniqueId)
      ).length === obj.length
    ) {
      return true;
    }
  }

  return false;
}
