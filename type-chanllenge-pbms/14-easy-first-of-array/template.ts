type First<T extends any[]> = T extends [infer Result, ...infer Rest] ? Result : never;