export default class TestModel{

    public fullName: string;

    constructor(fullName:string){
        this.fullName = fullName;
    }

    public getFullName(): string{
        return this.fullName;
    }
}