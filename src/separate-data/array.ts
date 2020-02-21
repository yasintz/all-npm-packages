function separateArrayData(
  unmodifiedArray: Array<any>,
  baseSeparateFn: (obj: any) => any
) {
  const modifiedData = {};
  unmodifiedArray.forEach((nestedUnmodifiedData: any) => {
    Object.assign(modifiedData, baseSeparateFn(nestedUnmodifiedData));
  });

  return modifiedData;
}

export default separateArrayData;
