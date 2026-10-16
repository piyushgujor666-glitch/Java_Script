// settimeout concept

// console.log("one")
// console.log("two")
// setTimeout(()=>{
//     console.log("hello");
// },4000);
// console.log("three")
// console.log("four")

//  callbacks

// function sum(a,b) {
//     console.log(a+b);
// }

// function calculator(a,b,sumcallback){
//     sumcallback(a,b);
// }

// calculator(1,2,sum);

//  example of calllback with callback hell

// function getdata(dataid,getnextdata){
//     setTimeout(() => {
//         console.log("data",dataid);
//         if(getnextdata){
//             getnextdata();
//         }
//     }, 2000);
// }

// callback hell

// getdata(1,()=>{
//     console.log("getting data 2.....")
//     getdata(2, ()=>{
//         console.log("getting data 3.....")
//         getdata(3, ()=>{
//             console.log("getting data 4.....")
//             getdata(4 , ()=>{
//                 console.log("Thank you.....")
//             });
            
//         });
//     });
// });

// Promises

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     // resolve("success");
//     // reject("some error occurred");
// });

// second example

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a Promise");
//         // resolve("Success");
//         reject("network Error occurred");
//     });
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled",res);
// });

// promise.catch((err)=>{
//     console.log("rejected",err);
// });

// Third example

// function asyncfunc1(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("success");
//         },2000);
//     });
// };

// function asyncfunc2(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data2");
//             resolve("success");
//         },2000);
//     });
// };

// console.log("fetching data1......");
// asyncfunc1().then((res)=>{
//     console.log(res);
//     console.log("fetching data2......");
//      asyncfunc2().then((res)=>{
//         console.log(res);
//     })
// });

// Async - Await

// async function hello(){
//     console.log("hello");
// }

function api(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("wether data");
            resolve(200);
        }, 2000);
    });
}

async function getwetherapi() {
    await api();
    await api();
}