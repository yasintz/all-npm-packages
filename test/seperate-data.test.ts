import createAll from './utils/create-all';
import createData from './utils/create-data';

const exampleObject = createData({
  nestedData: [createData(), createData()],
  nestedObject: createData({
    item: createData(),
    color: 'blue',
  }),
});

console.log(JSON.stringify(createAll(exampleObject), null, 4));

const { reverseData } = createAll(exampleObject);

describe('Seperate Data', () => {
  it('works', () => {
    expect(exampleObject).toEqual(reverseData);
  });
});
