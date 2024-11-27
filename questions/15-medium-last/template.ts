export type Last<T extends any[]> = T extends [] ? never : [any, ...T][T['length']]
