"use strict";
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
console.log(myVariable.name);
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
