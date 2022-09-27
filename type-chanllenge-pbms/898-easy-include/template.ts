// ```ts
// type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
// ```
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;

type Includes<T extends any[], U> = T extends [infer R, ...infer L]
  ? Equal<R, U> extends true
    ? true
    : Includes<L, U>
  : false;

/**
 - `T[number]`：它返回数组中所有数字类型键对应的值，将这些值构造成一个联合类型，例如：`1 | 2 | 3`。
- `U extends T[number]`：判断`U`是否是某个联合类型的子类型，例如：`1 extends 1 | 2 | 3`。
- `Equal`：是用来判断两个值是否相等的辅助方法。

   * 
   * 
   */
