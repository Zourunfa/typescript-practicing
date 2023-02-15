type PromiseAllType<T> = Promise<{
  [P in keyof T]: T[P] extends Promise<infer R> ? R : T[P]
}>

declare function PromiseAll<T extends any[]>(values: readonly [...T]): PromiseAllType<T>