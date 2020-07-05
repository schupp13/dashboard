
let quotes = [];
let quoteDom  = document.querySelector(".quote");
let quoteAuthor = document.querySelector(".quote-author");
let qB = document.querySelector(".quote-button");
var domReadyQuotes = function(callback) {
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};

qB.addEventListener('click', getRandomQuote);

domReadyQuotes(getRandomQuote);

function getRandomQuote(){
        fetch('https://type.fit/api/quotes')
        .then(res => res.json())
        .then(data => {
      
          quotes = data;
           let randomQuote = quotes[Math.floor(Math.random() * Math.floor(quotes.length))];;
           quoteDom.innerHTML = randomQuote.text;
           quoteAuthor.innerHTML = "~ " + randomQuote.author;
        })
        .catch(err =>{
            console.log(err)
        })
    } 