// // 结果：3
// type result1 = Length<[1, 2, 3]>;
// // 结果：10
// type result2 = Length<{ 5: '5'; length: 10 }>;

type Length<T extends readonly any[]> = T['length'];
