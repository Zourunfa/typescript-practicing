type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}
/***
 * 
 * 
 * test git setting
[k in P]
当使用 k in P 时，这里的 P 必须是一个联合类型或者索引签名类型的键类型。
这表示将遍历联合类型 P 中的所有成员，并且每个成员都会被用作新类型的一个属性键。

type P = 'name' | 'age';
type T = { name: string; age: number };

type Example1 = { [k in P]: T[k] };
// Equivalent to:
// type Example1 = {
//   name: string;
//   age: number;
// }
在这个例子中，P 是一个联合类型 'name' | 'age'，所以 Example1 
将会有一个 name 属性和一个 age 属性，分别对应 T['name'] 和 T['age'] 的类型。


[k in keyof P]

当使用 k in keyof P 时，这里的 P 必须是一个对象类型
。keyof P 会得到 P 类型的所有公共属性键的联合类型。
这表示将遍历 P 类型的所有属性键，并且每个属性键都会被用作新类型的一个属性键。
type P = { name: string; age: number };
type T = { name: string; age: number };

type Example2 = { [k in keyof P]: T[k] };
// Equivalent to:
// type Example2 = {
//   name: string;
//   age: number;
// }
在这个例子中，P 是一个具有 name 和 age 属性的对象类型。keyof P 
会得到 'name' | 'age'，所以 Example2 将会有一个 name 属性和一个 age 属性，
分别对应 T['name'] 和 T['age'] 的类型。

总结来说：

k in P 遍历的是联合类型的成员。
k in keyof P 遍历的是对象类型的属性键。
两者在效果上可能看起来相似，但适用的场景不同。如果 P 是一个对象类型，
那么应该使用 keyof P；如果 P 是一个联合类型，则直接使用 P 即可
 */
