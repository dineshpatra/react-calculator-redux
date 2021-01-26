export type Immutable<T> = {
    readonly [k in keyof T]: Immutable<T[k]>;
}