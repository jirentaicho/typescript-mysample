// クラススコープのジェネリクスは、Basicクラスのインスタンスメソッド、プロパティで利用できる
export default class Basic<T> {
    private element : T;
    
    constructor(element : T) {
        this.element = element;
    } 
    public get(): string{
        return typeof(this.element);
    }
}