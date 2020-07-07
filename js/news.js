let news = [];
let count = 0;
let article;
let newsTitle = document.querySelector(".news-title");
let newsDiv = document.querySelector(".news-div");
let newsImage = document.querySelector(".news-image");
let newsBody = document.querySelector(".news-body");

let back = document.querySelector(".back");
let read = document.querySelector(".read");
let forward = document.querySelector(".forward");


var domReadyNews = function(callback) {
document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};

domReadyNews(getNews);

function getNews(){
    fetch("https://bing-news-search1.p.rapidapi.com/news/trendingtopics?textFormat=Raw&safeSearch=Off", {
    
        "headers": {
            "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
            "x-rapidapi-key": RapidApiKey,
            "x-bingapis-sdk": "true"
        }
    })
    .then(response => response.json())
    .then(result => {
        news=result.value;
        console.log(news);
        newsLoop();
    })
    .catch(error => console.log('error', error));
}

let myInterval = setInterval(forwardOne,15000);

window.myInterval;

function newsLoop(){
    console.log(count);
    count =  count <= news.length && count >0 ? count : 0;
   
    article = news[count];
    console.log(article);
    
    newsTitle.innerHTML = "";
    newsTitle.innerHTML = article.name;
    newsImage.setAttribute("src",  article.image.url)
   

    // newsDiv.style.backgroundImage = "url('" + article.image.url + "')";
    // newsDiv.style.backgroundSize = "cover";
    newsDiv.style.backgroundRepeat = "no-repeat";
    newsBody.innerHTML = article.query.text;
  
    
}

back.addEventListener('click', backOne);
forward.addEventListener('click', forwardOne);
function backOne(){
    count -=1;
    newsLoop();
    clearInterval(myInterval);
}

function forwardOne(){
    count += 1;
    newsLoop();
    clearInterval(myInterval);
}

read.addEventListener('click' ,()=>{
    document.location.href= article.newsSearchUrl;
})









