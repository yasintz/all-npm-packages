import { MaybeArray, Schema } from '../helpers';

function arrayDataToScheme(
  data: Array<Schema>,
  baseFn: (d: any) => MaybeArray<Schema>
): Array<Schema> | null {
  const arraySchema = data.map(childItem => baseFn(childItem));
  if (arraySchema.filter(item => item === null).length === 0) {
    return arraySchema as Array<Schema>;
  }

  return null;
}

export default arrayDataToScheme;
