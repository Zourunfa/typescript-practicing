type Foo = {
  id: number;
  name: string;
  age: string;
}
type Bar = {
  name: string;
  age: string;
  gender: number;
}

// 结果：{ id: number; gender: number; }
type result = Diff<Foo, Bar>