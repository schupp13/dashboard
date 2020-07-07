

let clock = document.querySelector('.clock');
let now = new Date();

  let now2 =  new Intl.DateTimeFormat('default',
        {
            hour12: true,
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        }).format(now);

        let myInterval = setInterval(getTime,1000);

        window.myInterval;


function  getTime(){

     now2 =  new Intl.DateTimeFormat('default',
    {
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }).format(now);
    clock.innerHTML = now2;
}
