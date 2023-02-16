type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

/**
 * as 的功能 就是 在 in 迭代的基础上 进行第二次断言，也就是附加一个条件的意思 
 * 翻译这句话就是 P是T的Key 而且  P也是K的key
 *
 */
