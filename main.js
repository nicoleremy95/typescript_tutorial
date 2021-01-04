"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'Hello ';
console.log(message);
//DECLARATIONS
var x = 10;
var y = 20;
//let declarations do not need to be initialized, whereas const does
var sum;
var title = 'Codevolution';
//TYPE
var isBeginner = true;
var total = 0;
var name = 'Nicole';
/**you can't redeclare a variable to be anything other than its inital type
 * for example,
 *  let name: string = 'Nicole';
 *  name = true;
 * this will throw you an error
 * **/
var sentence = "My name is " + name + " I am a beginner in Typescript";
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
//two ways to declare an array type
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
//the number of elements and order of elements are fixed 
var person1 = ['Nicole', 1932];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
//any type 
var randomValue = 10;
randomValue = true;
randomValue = 'Nicole';
//any type can use multiple properties
var myVariable = 10;
// console.log(myVariable.name);
myVariable();
myVariable.toUppercase();
//unknown type
var myThing = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj === 'object' &&
        'name' in obj;
}
if (hasName(myThing)) {
    console.log(myThing.name);
}
myThing.toUpperCase();
//Multiple types
var multiType;
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
function add(num1, num2) {
    return num1 + num2;
}
/*in Javascript this would be
    function add(num1, num2){
        return num1 + num2;
    }
*/
add(1, 6);
//can't do add(1, '3'); because '3' is not a number
//Optional parameters
//you can have as many optional parameters as you would like, however, make sure that they go after the required parameters
function subtract(num1, num2) {
    if (num2)
        return num1 - num2;
    else
        return num1;
}
subtract(31, 2); //29
subtract(2); //2
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);
//CLASS 
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Hello " + this.employeeName);
    };
    return Employee;
}());
var employee1 = new Employee('Drake');
console.log(employee1.employeeName);
employee1.greet();
//CLASS BASED INHERITANCE
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log('manager delegating tasks');
    };
    return Manager;
}(Employee));
var m1 = new Manager('Drake');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
//ACCESS MODIFERS
