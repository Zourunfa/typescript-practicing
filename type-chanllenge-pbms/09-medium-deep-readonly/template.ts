// type X = {
//   x: {
//     a: 1
//     b: 'hi'
//   }
//   y: 'hey'
// }

// type Expected = {
//   readonly x: {
//     readonly a: 1
//     readonly b: 'hi'
//   }
//   readonly y: 'hey'
// }

// type Todo = DeepReadonly<X> // should be same as `Expected`

type DeepReadonly<T> = keyof T extends never ? T : { readonly [k in keyof T]: DeepReadonly<T[k]> }

/**
   * 
   * 条件判断：keyof T extends never 判断 T 是否没有可枚举的属性键。

如果 T 没有可枚举的属性键，直接返回 T 本身。
如果 T 有可枚举的属性键，则进入下一个步骤。
递归定义只读属性：

{ readonly [k in keyof T]: DeepReadonly<T[k]> }：定义一个新对象类型，其中：
keyof T：获取 T 的所有属性键。
[k in keyof T]：遍历 T 的所有属性键。
readonly [k in keyof T]：将每个属性设置为只读。
DeepReadonly<T[k]>：递归地应用 DeepReadonly 类型到 T 的每个属性值上，确保子属性也被设置为只读。
总结：此类型定义实现了对对象及其所有子对象进行深度只读化的效果。
   * 
   * 
   */
