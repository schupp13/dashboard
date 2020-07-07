let word = document.querySelector(".word");
let definition = document.querySelector(".definition");
let pronounce = document.querySelector(".pronounce");
let wordButton = document.querySelector(".word-button")

var domReadyWord = function(callback) {
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};


domReadyWord(getWord);

wordButton.addEventListener('click', getWord);


function getWord(){
    fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
            "x-rapidapi-key": RapidApiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
       word.innerHTML =  data.word; 
       definition.innerHTML = "";
       definition.innerHTML = data.results[0].definition ? data.results[0].definition: 'nodef';
    })
    .catch(error => console.log('error', error));
}

