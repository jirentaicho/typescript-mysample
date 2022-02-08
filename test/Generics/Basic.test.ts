import Basic from "../../src/Generics/Basic"


test('basic', () => {
    const num = new Basic<Number>(55);
    expect(num.get()).toBe("number");
})