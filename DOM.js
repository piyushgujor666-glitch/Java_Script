// dom is usefull to change dynamicali inside a code of html and css.
console.log("Hello");
alert("Piyush");
// console.dir is important for print object and document and methods.
console.dir(document.body.childNodes[1]);
console.log(document.body);  
console.dir(document.head);

// DOM Manuplation

 let Heading = document.getElementById("heading");
 console.log(Heading);

 let headings = document.getElementsByClassName("heading");
 console.log(Heading);

 let paras = document.getElementsByTagName("p");
 console.log(paras);

//  query selector

let felements = document.querySelector("p");
console.dir(felements);
let Selements = document.querySelectorAll("p");
console.dir(Selements);

// PROPERTIES

 