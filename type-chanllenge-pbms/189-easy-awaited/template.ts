/**
function getInfo(): Promise<string | number> {
  return Promise.resolve(1);
}
// 结果：(） => Promise<string|number>
type funcType = typeof getInfo;
// 结果：Promise<string|number>
type returnResult = ReturnType<funcType>;
// 结果：string|number
type PromiseResult = PromiseType<returnResult>;
 */

type PromiseType<T> = T extends Promise<infer R>
  ? R extends Promise<any>
    ? PromiseType<R>
    : R
  : never;
