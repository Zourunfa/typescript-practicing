type DiffKeys<T, U> = Exclude<keyof T | keyof U, keyof (T | U)>
type Diff<T, U> = {
  [k in keyof DiffKeys<T, U>]: k extends keyof T ? T[k] : k extends keyof U ? U[k] : never
}