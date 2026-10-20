const URL = "https://dog.ceo/api/breeds/image/random";
let facts = document.querySelector("#fact")
let dog = document.querySelector("#dog")
let newBtn = document.querySelector("#newBtn")

const getData = async () => {
    console.log("Getting Data...");
    let response = await fetch(URL);
    let data = await response.json();

    facts .innerText = "Random Dog Image 🐶";
    dog.src = data.message;
};

newBtn.addEventListener("click", getData);

getData();