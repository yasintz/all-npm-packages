import createAll from './utils/create-all';
import { createData, createArrayData } from './utils/create-data';

const exampleObject = createData({
  nestedData: [
    createData(),
    createData(),
    createArrayData(5),
    [createArrayData(15), createData()],
  ],
  nestedObject: createData({
    item: createData(),
    color: 'blue',
  }),
  isNumber: false,
});

const { reverseData } = createAll(exampleObject);

describe('Seperate Data', () => {
  it('works', () => {
    expect(exampleObject).toEqual(reverseData);
  });
});
