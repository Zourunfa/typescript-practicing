import { Equal, Expect } from '@type-challenges/utils'

type cases = [Expect<Equal<MyReadOnly<Todo1>, Readonly<Todo1>>>]

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}
