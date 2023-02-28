// 结果：true
type result1 = IsUnion<string | number | boolean>
// 结果：false
type result2 = IsUnion<string>

// 案例一
type T = string | number
step1: string | number extends string | number
step2: string extends string | number => [number] extends [never] => true
step3: number extends string | number => [string] extends [never] => true
step4: true | true
result: true

// 案例二
type T = string
step1: string extends string
step2: [never] extends [never] => false
result: false