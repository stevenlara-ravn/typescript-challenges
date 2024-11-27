export type CamelCase<T extends string> = T extends `${infer First}-${infer Rest}`
    ? (Rest extends Capitalize<Rest>
        ? `${First}-${CamelCase<Rest>}`
        : CamelCase<`${First}${CamelCase<Capitalize<Rest>>}`>)
    : T