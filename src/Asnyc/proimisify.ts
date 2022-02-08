/**
 * 参考：プログラミングTypeScript ―スケールするJavaScriptアプリケーション開発 336P
 */

import { resolve } from "path";

export function dofetch(filename:string) : Promise<Response>{
    // わざわざ関数にしなくてもいい
    return fetch(`/${filename}`);
}

export function promisify<T,A>( f: (arg: A, f: (error: unknown, result: T | null) => void) => void): (arg: A) => Promise<T> {
    return (arg: A) => 
        new Promise<T> ((resolve,reject) => {
            f(arg, (error, result) => {
                if(error) {
                    return reject(error)
                }
                if(result === null){
                    return reject(null)
                }
                resolve(result);
            })
        })
} 

