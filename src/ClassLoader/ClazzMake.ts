/**
 * https://stackoverflow.com/questions/47082026/typescript-get-all-implementations-of-interface/47082428#47082428
 */
 
 import { Constructor } from "./Constructor";
 
 export default class ClazzMake<T>{
     
     public implementations: Constructor<T>[] = [];
 
     GetImplementations(): Constructor<T>[] {
         return this.implementations;
     }
 
     GetImplementationByName(name:string): Constructor<T>{
         const result = this.implementations.find(i => i.name === name);
         if(result == undefined){
             throw new Error(`対象のクラスが存在しません name : ${name}`);
         }
         return result;
     }
 
     register<K extends Constructor<T>>(ctor: K) {
         this.implementations.push(ctor);
         return ctor;
     }
 }