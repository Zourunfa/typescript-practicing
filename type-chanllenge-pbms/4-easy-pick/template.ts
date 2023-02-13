type MyPick<T, P extends keyof T> = {
  [k in P]: T[k]
}