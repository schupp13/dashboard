

let clock = document.querySelector('.clock');
let now = new Date();

  let now2 =  new Intl.DateTimeFormat('default',
        {
            hour12: true,
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        }).format(now);

        let myIntervalClock = setInterval(getTime,1000);

        window.myIntervalClock;


function  getTime(){
    now = new Date();
     now2 =  new Intl.DateTimeFormat('default',
    {
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }).format(now);
    console.log()
    clock.innerHTML = now2;
}
