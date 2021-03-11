"use strict";
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Typescript Types: string, number, boolean ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
// Automatically declare the variable type
const number1 = 5;
const boolean = false;
const string = 'Hasil: ';
// Manually declare the variable type (do this only when the variable is not assigned with any value)
let number2;
number2 = 10;
// Dynamically typed variable (not recommended)
let dynamic;
dynamic = 15;
dynamic = '15';
const add = function (n1, n2, showResult, phrase) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    // 	throw new Error('errorrr!');
    // }
    if (showResult) {
        const result = n1 + n2;
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
};
console.log(add(number1, number2, boolean, string));
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Typescript Object: object ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
// Automatically declare the content inside the object
const person1 = {
    name: 'Toms',
    age: 23,
};
// Manually declare the content inside the object (not recommended)
let person2 = {
    name: 'Toms',
    age: 24,
};
// Dynamically typed object (not recommended)
let person3 = {};
person3.something = 'something';
person3.somethingMore = 'something More';
console.log('name:string , age:number :', person1);
console.log('name:string , age:number :', person2);
console.log('Anything				 :', person3);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Typescript Object: array ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
// Automatically declare the variable type inside the array
const hobbies1 = ['Football, Music'];
// Manually declare the variable type inside the array (do this only when the array is not assigned with any value)
let hobbies2 = [];
hobbies2.push('Soccer');
hobbies2.push('Basketball');
// Union variable typed inside the array (not recommended)
let hobbies3 = [];
hobbies3.push(10.5);
hobbies3.push('something');
// Dynamically typed variable inside the array (not recommended)
let hobbies4 = [];
hobbies4.push(10.5);
hobbies4.push('something');
hobbies4.push(true);
console.log('String only 		: ', hobbies1);
console.log('String only 		: ', hobbies2);
console.log('String or number 	: ', hobbies3);
console.log('Any 				: ', hobbies4);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Type Inference in typescript ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
for (const hobby of hobbies1) {
    // typescript knows that hobbies is an array of string, thus the hobby variable will be string as well, thus, using buitl-in string functions will not result in error
    console.log(hobby.toUpperCase());
    // the line below will result in an error because .toPrecision() method is for number variable
    // console.log(hobby.toPrecision(2));
}
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Typescript Object: Tuple ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
// declaring a tuple
let tuple = [1, 'a string'];
tuple = [2, 'some string'];
// below will result in an error
// tuple[0] = 'string';
// tuple[1] = 1;
// tuple = [2, 'something', 'something'];
// tuple = [2, 2];
console.log('tuple: ', tuple);
// push is an exception in tuple that will not result in an error
tuple.push('test');
console.log('after push: ', tuple);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Typescript Object: Enum ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
// enum starts with uppercase
// declare enum with default value (0,1,2,...)
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["OTHER"] = 2] = "OTHER";
})(Gender || (Gender = {}));
// declare enum with starting value (example below starts from 1)
var LGBTGender;
(function (LGBTGender) {
    LGBTGender[LGBTGender["LESBIAN"] = 1] = "LESBIAN";
    LGBTGender[LGBTGender["GAY"] = 2] = "GAY";
    LGBTGender[LGBTGender["BI"] = 3] = "BI";
    LGBTGender[LGBTGender["TRANSGENDER"] = 4] = "TRANSGENDER";
})(LGBTGender || (LGBTGender = {}));
// declare enum with custom value
var IndoGender;
(function (IndoGender) {
    IndoGender["COWOK"] = "COWOK";
    IndoGender["CEWEK"] = "CEWEK";
})(IndoGender || (IndoGender = {}));
let myGender = Gender.MALE;
if (myGender === Gender.MALE) {
    console.log('I AM : ', myGender);
}
else if (myGender === Gender.FEMALE) {
    console.log('I AM : ', myGender);
}
else if (myGender === Gender.OTHER) {
    console.log('I AM : ', myGender);
}
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Typescript Types: Any ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
let any;
any = 'a';
console.log('any : ', any);
any = 1;
console.log('any : ', any);
any = true;
console.log('any : ', any);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Typescript Types: Union ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
let union;
union = 'string';
union = 1;
let combine = function (input1, input2) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
};
console.log('addition		: ', combine(1, 2));
console.log('concatenation 	: ', combine('Steph', 'Tomm'));
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Typescript Types: Literal ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
// literal : only allow specific value on a variable
let literal;
literal = 'string1';
literal = 'string2';
// below will result in error
// literal = 'other';
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Typescript Types: Type Aliases ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
let stringNumber;
let gender;
stringNumber = 10;
console.log('stringNumber 	: ', stringNumber);
stringNumber = 'sepuluh';
console.log('stringNumber 	: ', stringNumber);
gender = 'Male';
console.log('gender 		: ', gender);
// below will result in error
// mySex = 'other';
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Typescript Function: Return Type ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
// Automatically declare the return type
const automaticReturnType = function () {
    return 0;
};
// Manually declare the return type (not recommended)
const manualReturnType = function () {
    return 0;
};
// must assign the return value to correct variable types
let returnVal;
returnVal = automaticReturnType();
// below will result in error
// let returnVal:string;
// returnVal = automaticReturnType();
console.log('function return 		: ', typeof automaticReturnType());
// You could also declare void function
const voidReturnType = function () {
    let test = 1;
};
// void function still returns a variable (an undefined variable)
console.log('void function return 		: ', typeof voidReturnType());
// You could also declare a function that returns undefined
const undefinedReturnType = function () {
    // (the only difference with void function is, in undefined function u have to return an undefined)
    return;
};
console.log('undefined function return 	: ', typeof undefinedReturnType());
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Typescript Function: Function Types ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
// Automatically declare a function variable
let someFunction1 = function (n1) {
    return n1;
};
let someFunction2 = function (n1, n2) {
    return n1 + n2;
};
// Manually declare a function variable
// Declare a function variable, that can store a function with any number of parameters and any kind of return value (not recommended)
let functionVar;
// Declare a function variable, that can store a function with certain number of parameters and certain kind of return value
let functionVar1;
let functionVar2;
functionVar = someFunction1;
console.log('functionVar(1)		: ', functionVar(1));
functionVar = someFunction2;
console.log('functionVar(1, 2)	: ', functionVar(1, 2));
// below statement will not result in an error, because functionVar variable could accept number of parameters
console.log('functionVar(1, 2)	: ', functionVar(1, 2, 3));
// below statement will not result in an error, because functionVar variable could return any variable types
let retVal = functionVar(1, 2);
console.log('retVal			: ', retVal);
console.log('typeof(retVal)		: ', typeof retVal);
functionVar1 = someFunction1;
console.log('functionVar1(1)		: ', functionVar1(1));
functionVar2 = someFunction2;
console.log('functionVar2(1, 2)	: ', functionVar2(1, 2));
// below will result in an error
// retVal = functionVar1(1);
// retVal = functionVar2(1, 2);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Typescript Function: Function Types and Callbacks ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
// declaring a function type variable with a callback function parameters
const thefunction = function (n1, n2, cb) {
    return n1 + n2 + cb(n1);
};
const callbackFunction1 = function (n) {
    return n;
};
const callbackFunction2 = function (s) {
    return s;
};
const callbackFunction3 = function (n1, n2) {
    return n1 + n2;
};
console.log('thefunction(1, 2, callbackFunction) : ', thefunction(1, 2, callbackFunction1));
// below will result in an error
// thefunction(1, 2, callbackFunction2);
// thefunction(1, 2, callbackFunction3);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Typescript Type: Unknown Type ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
// declaring unknown type. U can assign any variable type to an unknown type, just like any.
let unknown;
unknown = 0;
unknown = 'string';
// the difference between type unknown and type any:
let anyVar;
anyVar = 0;
anyVar = 'string';
let strVar;
// assigning string variable with type any variable will not result in an error
strVar = anyVar;
// assigning string variable with type unknown variable will result in an error
// strVar = unknown;
// must include additional validation step
if (typeof unknown === 'string') {
    strVar = unknown;
}
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Typescript Function: Never Type ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
// never function is a function that does not have a reacheable end point
// for example:
let neverRetFunc1 = function (n1) {
    while (true) { }
};
let neverRetFunc2 = function (message) {
    throw { message: message };
};
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Congratulations, You have finished the crash course ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
