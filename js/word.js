

var domReadyWord = function(callback) {
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};


domReadyWord(function(){
    fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
            "x-rapidapi-key": "370739fd14mshd12d48b1c5dd517p15208bjsncac3bfbb16e6"
        }
    })
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
});

