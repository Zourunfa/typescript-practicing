type ReplaceKeys<T, U, P> = {
  [K in keyof T]: K extends U ? K extends keyof P ? P[K] : never : T[K]
}