let weatherButton = document.querySelector('.weather');
let temp = document.querySelector('.temp');
let tempDes = document.querySelector('.temp-des');
let weathermodal = document.querySelector('#weatherModal');
let closeBtn = document.querySelector('.closeBtn');

let modalTitle = document.querySelector('.modal-title');
let modalBody = document.querySelector('.modal-body');
let modalContent = document.querySelector('.modal-content');


weatherButton.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
//weathermodal.addEventListener('click', closeModal);

function openModal(){
    weathermodal.style.display = 'block';
    fetchForcast();
}

function closeModal(){
    weathermodal.style.display = 'none';
    clearWeatherModal();
}


function clearWeatherModal (){
    modalBody.innerHTML = "";
}

function fetchForcast(){
    fetch('http://api.openweathermap.org/data/2.5/forecast?q=jacksonville&units=imperial&cnt=16&appid=73137b409c19aba561df3236c436fe56')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        modalTitle.innerHTML = data.city.name + " " + data.list.length * 3 + " hour forcast";
        data.list.forEach(element => {
            let dateBox = document.createElement("div");
            let date =  document.createElement('P');
            let descrip = document.createElement('P');
            descrip.innerHTML = element.weather[0].description;
            date.innerHTML = element.dt_txt;
            let temp = document.createElement('P');
            temp.innerHTML = element.main.temp;
            
            dateBox.classList.add("date");
            dateBox.appendChild(date);
            dateBox.appendChild(temp);
            dateBox.appendChild(descrip);
            descrip.innerHTML.includes("sun") ?  dateBox.classList.add("sun"):
            descrip.innerHTML.includes("rain") ?  dateBox.classList.add("rain"):
            descrip.innerHTML.includes("cloud") ?  dateBox.classList.add("cloud"):
            ssclassList.add("something")

            modalBody.appendChild(dateBox)
        });
        
    })
}

var domReady = function(callback) {
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};

domReady(function() {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=jacksonville&units=imperial&appid=61875a0ab0effcb82a85170538ae0914')
    .then(res => res.json())
    .then(data => {
        console.log(data.weather[0].description);
        tempDes.innerHTML =  data.weather[0].description;
        temp.innerHTML = data.main.temp + '&deg;';
    })
    .catch(err =>{
        console.log(err)
    })
});

