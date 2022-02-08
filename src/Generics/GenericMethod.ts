import { ClassConstructor } from "./ClassConstructor";

// 引数の型を継承した新しいクラスを返す
export function execute<C extends ClassConstructor>(Clazz : C){
    return class extends Clazz{
        do(){
            return `This is ${this.constructor.name}`;
        }
    }
}