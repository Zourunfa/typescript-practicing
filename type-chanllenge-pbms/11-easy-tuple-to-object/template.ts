const tuple = ['msg', 'name'] as const;
// 结果：{ msg: 'msg'; name: 'name'; }
type result1 = TupleToObject<typeof tuple>;

type TupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P;
};

//  `as const`：常用来进行常量断言，在此处表示将`['msg','name']`推导常量元组，表示其不能新增、删除、修改元素，可以使用`as readonly`来辅助理解。
// T[number] :表示返回所有数字型索引的元素，形成一个联合类型
