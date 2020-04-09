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

function createArrayData(length: number) {
  return new Array(length).fill('').map(() => createData());
}

export { createData, createArrayData };
