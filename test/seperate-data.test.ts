import _ from 'lodash';
import createAll from './utils/create-all';

const createChildData = () => ({
  id: `${Math.random()}`,
  key1: 'value1',
  key2: 'value2',
  arrayItem: [1, 2, 3, 4],
});

const exampleParentData = {
  id: 'parent-data',
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
  nestedData: [createChildData(), createChildData()],
};
const { reverseData } = createAll(exampleParentData);

describe('Seperate Data', () => {
  it('works', () => {
    expect(_.isEqual(exampleParentData, reverseData)).toEqual(true);
  });
});
