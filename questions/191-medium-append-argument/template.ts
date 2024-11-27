export type AppendArgument<Fn extends Function, A extends any> =
    Fn extends (...args: infer R) => infer T
    ? (...args: [...R, A]) => T
    : never