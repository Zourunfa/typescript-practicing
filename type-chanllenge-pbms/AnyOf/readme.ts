// 结果：true
type result1 = AnyOf<[0, false, 0, { name: 'name' }]>
// 结果：false
type result2 = AnyOf<[0, '', false, [], {}]>