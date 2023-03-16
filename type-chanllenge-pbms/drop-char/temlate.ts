type DropChar<S, C> = C extends '' ? S : S extends `${infer L}${infer C}${infer R}` ? DropChar<`${infer L}${infer R}`, C> : S
