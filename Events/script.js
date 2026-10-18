// let button = document.querySelector("#btn");
// let button1 = document.querySelector("#btn1");
// let button2 = document.querySelector("#btn2");
// let currMode = "light"
// button.onclick = (e)=>{
//     console.log(e);
//     console.log("Button was clicked");
// }
// button1.ondblclick = ()=>{
//     console.log("Button was clicked 2X");
// }
// button2.onmouseover = ()=>{
//     console.log("You are inside the Div");
// } 

// button.addEventListener("click",(e)=>{
//     console.log("Button Was Clicked")
//     console.log(e);
//     console.log(e.type);
// })

// button.addEventListener("click",()=>{
//     console.log("Button Was Clicked - hnadler-1")
// })
// button.addEventListener("click",()=>{
//     console.log("Button Was Clicked - hnadler-2")
// })
// let handler3 = ()=>{
//     console.log("Button Was Clicked - hnadler-3")
// }

// button.addEventListener("click",handler3);

// button.addEventListener("click",()=>{
//     console.log("Button Was Clicked - hnadler-4")
// })

// button.removeEventListener("click",handler3)

// button.addEventListener("click",()=>{
//     if(currMode === "light"){
//         currMode="Dark";
//         document.querySelector("body").style.backgroundColor = "Black";
//     }
//     else{
//         currMode="light";
//          document.querySelector("body").style.backgroundColor = "White";
//     }

//     console.log(currMode)
// })