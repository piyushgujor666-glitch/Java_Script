// OBJECTS

const student = {
    name : "Piyush",
    marks : 94.4,
    printMarks : function() {
        console.log("marks = ",this.marks);
    },
};

// const employee = {
//     calTax() {
//         console.log("Tax rate is 10%.")
//     }
// };

// const Piyush = {
//     salary : 50000,
//     calTax(){
//         console.log("Tax rate is 20%.")
//     }
// };

// Piyush.__proto__ = employee;

// classes

// class Toyotacar{
//     constructor(brand,mileage){
//         console.log("Creating new object");
//         this.brand = brand;
//         this.mileage = mileage;
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("Stop");
//     }
// }

// let fortuner = new Toyotacar("fortuner",10);
// console.log(fortuner);

// inheritance

// question no.1

// class parent {
//     hello(){
//         console.log("Hello");
//     }
// }

// class child extends parent{

// }

// let obj = new child();
// console.log(obj);

// question no.2  (Method overriding)

// class person{
//     constructor(){
//         this.species = "Homo sapiens"
//     }

//     eat(){
//         console.log("eat");
//     }

//     sleep(){
//         console.log("sleep");
//     }

//     work(){
//         console.log("Do Nothing");
//     }
// }

// class engineer extends person{
//     work(){
//         console.log("Solve problems, Build something");
//     }
// }
// class doctor extends person{
//     work(){   // jab same function perent and child class me hota he tab child class wala function invoke hota he is ko method ovverriding.
//         console.log("treat Patients");
//     }
// }

// let piyush = new engineer();
// let parvik = new doctor();

// question no.3 (Super Keyword)

// class person{
//     constructor(){
//         console.log("enter parent constructor");
//         this.species = "Homo sapiens";
//     }

//     eat(){
//         console.log("eat");
//     }

//     sleep(){
//         console.log("sleep");
//     }
// }

// class engineer extends person{
//     constructor(branch){
//         console.log("enter child constructor");
//         super(); // to invoke parent class constructor
//         this.branch = branch;
//         console.log("exits child constructor");
//     }
//     work(){
//         console.log("Solve problems, Build something");
//     }
// }

// let piyush = new engineer("CSE ");

// question no.4

// let data = "secret information";

// class user{
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }

//     viewdata(){
//         console.log("Data : ",data);
//     }
// }

// class admin extends user{
//     constructor(name,email){
//         super(name,email);
//     }
//     editdata(){
//         data = "some new value";
//     }
// }

// let student1 = new user("Piyush","piyushgujor@gmail.com");
// let student2 = new user("aman","aman@gamil.com");

// let teacher1 = new user("dean","dean@gmail.com");

// let admin1 = new admin("piyush","Piyushchaudhary@gmail.com");

// error handeling
 