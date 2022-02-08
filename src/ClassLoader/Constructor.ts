/**
 * https://stackoverflow.com/questions/47082026/typescript-get-all-implementations-of-interface/47082428#47082428
 */
export type Constructor<T> = {
    new(...args: any[]): T;
    readonly prototype: T;
}