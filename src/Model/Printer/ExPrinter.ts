import IPrinter from "./IPrinter";

export default class ExPrinter implements IPrinter{
    print(text: string): string {
        return `EX${text}`;
    }
}