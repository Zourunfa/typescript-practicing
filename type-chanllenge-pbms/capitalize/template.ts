type Capitalize<T extends string> = T extends `${infer R}${infer L}` ? `${Uppercase<R>}${L}` : T
