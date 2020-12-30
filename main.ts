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