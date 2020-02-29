const rn = () => `${Math.random()}`;
let count = 0;
function createData(assignData: any = {}) {
  const data = {
    id: rn(),
    [`key_${count}`]: `value_${count}`,
    ...assignData,
  };
  count++;
  return data;
}

export default createData;
