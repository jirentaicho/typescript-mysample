import ClazzMake from "../../src/ClassLoader/ClazzMake";
import TestModel from "../../src/Model/TestModel";


test('basic' , () => {
    const clazzMake = new ClazzMake<TestModel>();
    clazzMake.register(TestModel);

    const model = clazzMake.GetImplementationByName("TestModel");
    const result = new model("御坂美琴");

    expect(result.getFullName()).toBe("御坂美琴");
});