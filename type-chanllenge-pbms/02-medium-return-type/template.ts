// const fn = (v: boolean) => {
//   if (v)
//     return 1
//   else
//     return 2
// }

// type a = MyReturnType<typeof fn> // should be "1 | 2"

type MyReturnType<T> = T extends (...args: any) => infer R ? R : never

/**
 * 如果T是一个函数类型，则返回推断出的返回类型R，否则返回never
 *
 */
