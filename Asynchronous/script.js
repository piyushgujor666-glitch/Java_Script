// Synchronous

// console.log("Piyush");
// console.log("Gujor");
// console.log("Aman");

// Asynchronous

// console.log("one");
// console.log("Two");
// setTimeout(()=>{
//     console.log("Three");
// },3000);
// console.log("four");
// console.log("five");
// setTimeout(()=>{
//     console.log("Six");
// },2000);
// console.log("seven");

// ***************************************
// Call-Back

// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,sumcallback){
//     sumcallback(a,b);
// }
// calculator(1,2,sum);

// ****************************************
// Call-Back-Hell

// function getdata(dataId,getnextdata){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getnextdata){
//             getnextdata();
//         }
//     },2000)
// }
// console.log("getting data1 ....")
// getdata(1,()=>{
//     console.log("getting data2 ....")
//     getdata(2,()=>{
//         console.log("getting data3 ....")
//         getdata(3,()=>{
//             console.log("getting data4 ....")
//             getdata(4);
//         });
//     });
// })

// ****************************************

// Promises

// const getpromise = () => {
//     return new Promise((resolve, reject) => {
//     console.log("I am Promise.");
//     resolve("Success");
//     // reject("error");
// });
// }

// let promise = getpromise();
// promise.then((res)=>{
//     console.log("Promise Fullfilled",res);
// })
// promise.catch((err)=>{
//     console.log("Rejected",err);
// })


// function getdata(dataId,getnextdata){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("data",dataId);
//             if(getnextdata){
//                 getnextdata();
//             }
//         },5000)
//     })
// }

// function Asyncfunction1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data1");
//             resolve("Success");
//         },3000)
//     })
// }
// function Asyncfunction2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data2");
//             resolve("Success");
//         },3000)
//     })
// }

// console.log("fetching data1.....");
// Asyncfunction1().then((res)=>{
//     console.log("fetching data2.....");
//     return Asyncfunction2();
// }).then(()=>{
//     console.log("****Thanks getting data****")
//     console.log("Completed")
// })

// ******************************************

// Async and Await

// async function hello(){
//     console.log("hello");
// }

// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("Weather data");
//             resolve(200);
//         }, 2000);
//     })
// }

// async function getwetherdata() {
//     await api(); // 1st
//     await api(); // 2nd
// }

// function Asyncfunction1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data1");
//             resolve("Success");
//         },3000)
//     })
// }
// function Asyncfunction2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data2");
//             resolve("Success");
//         },3000)
//     })
// }

// // we have to call in this type

// // async function data(){
// //     console.log("We are fetching data1...")
// //     await Asyncfunction1();
// //     console.log("We are fetching data2...")
// //     await Asyncfunction2();
// // }

// // without call we have execute

// (async () => {
//     console.log("We are fetching data1...")
//     await Asyncfunction1();
//     console.log("We are fetching data2...")
//     await Asyncfunction2();
// })();