import IPrinter from "../Model/Printer/IPrinter";

export default class PrinterGeneric<T extends IPrinter>{
    private printer: T;
    constructor(printer: T){
        this.printer = printer;
    }
    public use(text : string): string{
        return this.printer.print(text);
    }
}