type FalseType = { [key: string]: never } | '' | false | [] | 0

type AnyOf<T extends readonly any[]> = T[number] extends FalseType ? false : true