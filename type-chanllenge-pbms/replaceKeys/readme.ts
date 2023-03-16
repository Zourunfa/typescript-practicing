// 结果：{ id: number; name: boolean; }
type result = ReplaceKeys<{ id: number; name: string; }, 'name', { name: boolean; }>