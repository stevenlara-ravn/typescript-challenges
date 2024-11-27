export type LengthOfString<S extends string, K extends string[] = []> =
    S extends `${infer F}${infer R}`
    ? LengthOfString<R, [...K, F]>
    : K['length']

type length = LengthOfString<'kumiko'>