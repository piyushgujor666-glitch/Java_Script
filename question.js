// const profile = {
//     account_name : "Piyush_chaudhari_2008",
//     follower : 5690000,
//     following : 4,
//     post : 195,
//     isfollow : true,
//     name : "Piyush",
//     bio : "i am the best"
// };

// question no.1
// let num = prompt("Enter a number:");

// if(num%5 == 0){
//     console.log(num,"Multipal with 5");
// }
// else{
//     console.log(num,"Not multipal with 5");
// }

// // question no.2

// let marks = prompt("Enter your marks : ");

// if(marks>=80 && marks<=100){
//     result = "Grade A";
// }
// else if(marks>=70 && marks<=79){
//     result = "Grade B";
// }
// else if(marks>=60 && marks<=69){
//     result = "Grade C";
// }
// else if(marks>=50 && marks<=59){
//     result = "Grade D";
// }
// else{
//     result = "Fail"
// }

// console.log(result);

// question no.1
// for(let i = 1;i<=100;i++){
//     if(i%2 == 0){
//         console.log(i);
//     }
// }

// // question no.2
// let gamenuber = 25;
// let usernumber = prompt("Enter number : ");
// while(usernumber!=gamenuber){
//     usernumber = prompt("You enterd wrong number. Guess again : "); 
// }

// console.log("You enterd right number");

// question

// let prompts = prompt("Enter your full name : ");
// console.log("@" + prompts + (prompts.length));

// question

// let marks = [87, 97, 44, 37, 76, 60];
// let total = 0;

// for (let i = 0; i < marks.length; i++) {
//     total += marks[i];
// }

// console.log(total / marks.length);

// question

// let prices = [250,645,300,900,50];
// for(let i = 0;i<prices.length;i++){
//     console.log(prices[i] - prices[i]*10/100);
// }

// question

// let arr = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

// // console.log(arr.shift());
// // console.log(arr);
// // console.log(arr.push("Amazon"));
// // console.log(arr);
// // console.log(arr.splice(2,1,"Ola"));
// // console.log(arr);

// question

// function sum(a,b){
//     console.log(a+b);
// }

// sum(3,4);

// question

// function vowels(n){
//     let count = 0;
//     for(const val of n){
//        if(val == "a" || val == "e" || val == "i" || val == "o" || val == "u"){
//         count ++;
//        } 
//     }
//     return count;
// }

// vowels("Piyush");
// console.log(vowels("Piyush"));

// let arr = [1,2,3,4,5];

// arr.forEach(function printval(val){ // value at each index.
//     console.log(val*val);
// });

      // // // or // // //
      
// let arr = [1,2,3,4,5];

// arr.forEach((val) => {
//     console.log(val*val);
// });

// question

// let marks = [10,20,90,40,90];

// let result = marks.filter((val) => val >= 90);

// console.log(result);
// console.log(result.length);

// question 

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + "from apna college";

// question

// let divs = document.querySelectorAll(".Box");
// // divs[0].innerText = "new unique value 1";
// // divs[1].innerText = "new unique value 2";
// // divs[2].innerText = "new unique value 3";

// let idx = 1;
// for(div of divs){
//       div.innerText = `new unique value ${idx}`;
//       idx++;
// }

// question

let newbtn = document.createElement("button");
newbtn.innerText = "Click me!";
newbtn.style.backgroundColor = "red";
newbtn.style.color = "white";
console.log(newbtn);

document.querySelector("body").prepend(newbtn);

// question

let para = document.querySelector("p");
