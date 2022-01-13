type MyReadonly<T> = {
  readonly [K in keyof T]: T[K]
}

// readonly 使其属性变为可读属性