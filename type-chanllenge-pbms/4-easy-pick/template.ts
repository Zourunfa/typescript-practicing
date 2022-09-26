type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// k  extends keyof T    代表K属于T下的联合类型
