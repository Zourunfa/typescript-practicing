// 定义一个函数 fn，它接受一个布尔类型的参数 v

// 如果 v 为 true，则返回 1

// 如果 v 为 false，则返回 2

const fn = (v: boolean) => {
  if (v) return 1
  else return 2
}

// 定义一个类型 a，它是 MyReturnType<typeof fn></typeof>的结果

// 这里期望的结果是 "1 | 2"，即 1 或 2

type a = MyReturnType<typeof fn> // should be "1 | 2"

// 定义一个类型 MyReturnType，它接受一个类型参数 T

// 如果 T 是一个函数类型，则推断出该函数的返回值类型 R

// 否则，返回 never 类型
