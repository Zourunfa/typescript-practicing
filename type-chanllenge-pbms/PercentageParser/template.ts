type CheckPrefix<T> = T extends '+' | '-' ? T : never
type CHeckSuffiex<T> = T extends `${infer L}%` ? [L, '%'] : [T, '']


type PercentageParser<T> = T extends `${CheckPrefix<infer L>}${infer R}` ? [L, ...CHeckSuffiex<R>] : ['', ...CHeckSuffiex<T>]