type Last<T> = T extends [...any[], infer P] ? P : never

// infer 用来推到最后一个元素是P,返回最后一个元素