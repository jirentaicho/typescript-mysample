import PrinterGeneric from "../../src/Generics/PrinterGeneric";
import ExPrinter from "../../src/Model/Printer/ExPrinter";
import IPrinter from "../../src/Model/Printer/IPrinter";

test('basic',()=>{
    const printer = new PrinterGeneric<IPrinter>(new ExPrinter);
    expect(printer.use("御坂美琴")).toBe("EX御坂美琴");
});