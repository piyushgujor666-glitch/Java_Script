// data types
// like that number,string,boolean,undefined,null,biglnt,symbol

// number
let age = 24;
let price = 99.99;
// string
let name = "Piyush";
// boolean
let isfollow = false;
// undefined
let x;
// null(object)
let y = null;
// Bigint
let z = BigInt("123");
// symbol
let a = Symbol("Hello!");

// object
const student = {
    name : "Piyush",
    age : 20,
    cgpa : 8.5,
    isPass : true
};

// how to change the objects details

student.age = student.age + 10;
console.log(student)

// let ke andar variable ko change kar sakte he but constant me varable to change nahi kar sakte
// but jab const obj ho to uske object me change kar sakte he