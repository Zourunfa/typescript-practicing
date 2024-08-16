type MyReadOnly<T> = {
  readonly [P in keyof T]: T[P]
}
//将传入的类型 T 的所有属性转换为只读属性
