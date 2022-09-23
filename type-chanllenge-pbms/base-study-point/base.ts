/**
 * 加号和减号的用法类似。
 *
 *
 *观察以上结果可以得出结论：-?是去掉类型中属性后面的?，整个Required的实际效果是去掉T类型中所有属性键后面的?，让所有属性变成必填的。
 */

type myRequired<T> = {
  [P in keyof T]-?: T[P];
};
type Person = {
  name: string;
  age?: number;
};

// 结果：{ name: string; age: number; }
type result = myRequired<Person>;

/**
 * keyof和in
 * keyof和in经常会连在一起使用，连在一起使用时, 通常表示一个迭代的过程
 */

type Person1 = {
  name: string;
  age: number;
};

type res1 = keyof Person;
// name | age

// ts中的keyof T，有点类似JavaScript中的Object.keys(),它们的共同点是获取属性键的集合，只不过keyof T得到的结果是一个联合类型，Object.keys()得到的是一个数组

// in 操作符号的右侧通常跟一个联合类型，可以使用in来迭代这个联合类型
// in 'name' | 'age' | 'sex'
// 'name' // 第一次迭代结果
// 'age'  // 第二次迭代结果
// 'sex'  // 第三次迭代结果

// 根据keyof 和 in 的特点，我们可以撰写一些辅助工具，这里以Readonly为例
type myhReadonly<T> = {
  readonly [p in keyof T]: T[p];
};

type Person2 = {
  name: string;
  age: number;
};

type res2 = myRequired<Person2>;
