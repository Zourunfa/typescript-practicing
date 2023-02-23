type Merge<T, U> = {
  [P in keyof T | keyof U]: P extends keyof U ? U[P] : P extends keyof T ? T[P] : never
}