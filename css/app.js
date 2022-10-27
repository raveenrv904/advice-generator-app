const url = "https://api.adviceslip.com/advice";

const id = document.querySelector("span");
const quote = document.querySelector("p");
const newButton = document.querySelector("a");

let data = '';
let idNumber = 0;

const request = function () {
    async function getApi(url) {
        const response = await fetch(url);
        let apiData = await response.json();
        data = apiData.slip.advice;
        idNumber = apiData.slip.id;

        id.innerText = idNumber;
        quote.innerText = data;
    }
    getApi(url);
}

request();

newButton.addEventListener("click", function () {
    request();
})







