type keys = 'Cat' | 'Dot'
type Animal = {
  name: string;
  age: number;
}
type Expected = {
  Cat: {
    name: string;
    age: number;
  };
  Dog: {
    name: string;
    age: number;
  }
}

// 结果：Expected
type RecordResult = Record<keys, Animal>