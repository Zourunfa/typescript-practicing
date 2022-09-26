// `Exclude`是排除的意思，它从`T`类型中排除属于`U`类型的子集，可以理解成取`T`对于`U`的差集，用法如下：

//
// // 结果：'name'|'age'
// type ExcludeResult = Exclude<'name' | 'age' | 'sex', 'sex' | 'address'>;
//

type MyExclude<T, U> = T extends U ? never : T;

// - `T extends U`：这段代码会从`T`的子类型开始分发，例如：

// ```ts
// T extends U
// => 'name'|'age'|'sex' extends 'sex'|'address'
// => (
//   'name' extends 'sex'|'address' ? never : 'name' |
//   'age' extends 'sex'|'address' ? never : 'age' |
//   'sex' extends 'sex'|'address' ? never : 'sex'
// )
// => 'name'|'age'
// ```
