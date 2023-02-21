type Flatten<T extends any[]> = T extends [infer R, ...infer L] ? R extends any[] ? [...Flatten<R>, ...Flatten<L>] : [R, ...Flatten<L>] : []

