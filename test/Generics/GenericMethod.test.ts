import { execute } from "../../src/Generics/GenericMethod";
import TestModel from "../../src/Model/TestModel";

test('basic', () => {
    const newClass = execute(TestModel);
    const model = new newClass("御坂美琴");
    expect(model.do()).toBe("This is TestModel");
});
