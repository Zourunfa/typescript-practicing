// interface Todo {
//   title: string;
//   description: string;
//   completed: boolean;
// }

// const todo: MyReadonly2<Todo, 'title' | 'description'> = {
//   title: 'Hey',
//   description: 'foobar',
//   completed: false,
// };

// todo.title = 'Hello'; // Error: cannot reassign a readonly property
// todo.description = 'barFoo'; // Error: cannot reassign a readonly property
// todo.completed = true; // OK

// type MyReadonly2<T, U extends keyof T = keyof T> = {
//   readonly [P in U]: T[P];
// } & {
//   [P in keyof T as P extends U ? never : P]: T[P];
// };

type MyReadonly2<T, K extends keyof T = keyof T> = Omit<T, K> & {
  readonly [P in keyof T as P extends K ? P : never]: T[P]
}

/**
 * Omit<T, K> 把 T 中除了 K 之外的属性剔除，得到一个新的对象。
 * 
 * {
  readonly [P in keyof T as P extends K ? P : never]: T[P]
};把 T 中除了 K 之外的属性变为只读，并把 K 之外的属性保持不变。
 * 
这两者合并就是想要的
 */
