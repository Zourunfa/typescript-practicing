type Foo = {
  a: number;
  b: string;
}
type Bar = {
  b: number;
  c: boolean;
}

// 结果：{ a: number; b: number; c: boolean; }
type result = Merge<Foo, Bar>