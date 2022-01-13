type First<T extends any[]> = T extends [infer Result, ...infer Rest] ? Result : never;


// infer 在编写时对未知类型的推断，在使用时按照给定泛型的匹配关系推断出正确类型

// 例如
// type Flatten<Type> = Type extends Array<infer Item>? Item:Type
// type strArr = Flatten<string[]>

// 上面的strArr中泛型传入了string[]  所以infer推断出Item为string类型