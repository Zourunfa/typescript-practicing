// 结果：3
// type result2 = First<[3, 2, 1]>;
// // 结果：never
// type result3 = First<[]>;
// 方法一
// type First<T extends any[]> = T extends [] ? never : T[0];

// - `T extends []`：用来判断`T`是否是一个空数组。

// 方法二

type First<T extends any[]> = T extends [infer R, ...infer L] ? R : never;
