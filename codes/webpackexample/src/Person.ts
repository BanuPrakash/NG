import Course from "./Course";


@Course({
    name: 'Angular 14'
})
export default class Person {
    public constructor(private name:string, private age:number) {
    }

    
    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }

    public setName(n:string): void {
        this.name = n;
    }
}