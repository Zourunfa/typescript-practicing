type result1 = PercentageParser<'+85%'> // ['+', '85', '%']
type result2 = PercentageParser<'-85%'> // ['-', '85', '%']
type result3 = PercentageParser<'85'>   // ['', '85', '']