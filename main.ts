export{};
let message = 'Hello ';
console.log(message);

//DECLARATIONS
let x = 10;
const y = 20;

//let declarations do not need to be initialized, whereas const does
let sum; 
const title = 'Codevolution'

//TYPE
let isBeginner : boolean = true;
let total: number = 0;
let name: string = 'Nicole';

/**you can't redeclare a variable to be anything other than its inital type
 * for example, 
 *  let name: string = 'Nicole';
 *  name = true;
 * this will throw you an error
 * **/


let sentence: string = `My name is ${name} I am a beginner in Typescript`;
console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

//two ways to declare an array type
let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

//the number of elements and order of elements are fixed 
let person1: [string, number] = ['Nicole', 1932];

enum Color {Red, Green, Blue};
let c: Color = Color.Green;
console.log(c);

//any type 
let randomValue: any = 10;
randomValue = true;
randomValue = 'Nicole';

//any type can use multiple properties
let myVariable: any = 10;
// console.log(myVariable.name);
myVariable();
myVariable.toUppercase();

//unknown type
let myThing: unknown = 10;
function hasName(obj: any): obj is {name:string}{
    return !!obj &&
        typeof obj === 'object' &&
        'name' in obj
}
if(hasName(myThing)){
    console.log(myThing.name)
}
(myThing as string).toUpperCase();

//Multiple types
let multiType: number | boolean;
multiType = 20;
multiType = false;

    /* Although these two declarations run okay, the first one limits the type whereas the second one could accept any type including a string, object, array, etc
        let multiType: number | boolean;
        multiType = 20;
        multiType = false;

        let anyType: any;
        anyType = 20;
        anyType = false;

    */ 

//FUNCTIONS
//the last instance of number specifies the return type
function add(num1: number, num2: number): number{
    return num1 + num2;
}
    /*in Javascript this would be 
        function add(num1, num2){
            return num1 + num2;
        }
    */
add(1, 6)

//can't do add(1, '3'); because '3' is not a number

//Optional parameters
    //you can have as many optional parameters as you would like, however, make sure that they go after the required parameters
function subtract(num1: number, num2?: number): number{
    if(num2) return num1 - num2;
    else return num1;
}
subtract(31,2) //29
subtract(2) //2

//INTERFACE
interface Person {
    firstName: string,
    lastName: string
    /*to make a property optional, add ? to the end
        example
            interface Person {
                firstName: string,
                lastName?: string
            }
    */

}
function fullName(person: Person){
    console.log(`${person.firstName} ${person.lastName}`)
}

let p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};

fullName(p);

//CLASS 
class Employee {
    employeeName: string

    constructor(name: string){
        this.employeeName = name;
    }

    greet(){
        console.log(`Hello ${this.employeeName}`)
    }
}

let employee1 = new Employee ('Drake');
console.log(employee1.employeeName);
employee1.greet();


//CLASS BASED INHERITANCE
class Manager extends Employee{
    constructor(managerName: string){
        super(managerName);
    }

    delegateWork(){
        console.log('manager delegating tasks')
    }
}

let m1 = new Manager('Drake');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

//ACCESS MODIFERS


