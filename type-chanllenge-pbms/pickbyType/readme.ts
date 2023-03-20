interface Model {
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}
// 结果：{ isReadonly: boolean, isEnable: boolean }
type result = PickByType<Model, boolean>
