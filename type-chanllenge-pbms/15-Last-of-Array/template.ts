type Last<T> = T extends [...any[], infer P] ? P : never

// 