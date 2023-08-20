const inputCheckboxEl = document.querySelector('input')
let is12HrFormat = true

inputCheckboxEl.addEventListener("change", (e) => {
    
    if(e.target.checked) {
        is12HrFormat = true
        currentTime()
    }
    else {
        is12HrFormat = false
        currentTime()

    }
})


const currentTime = () => {
    const h1El = document.querySelector("h1")

    const currentDate = new Date()
    let currentHour = currentDate.getHours();
    let currentMin = currentDate.getMinutes();
    let currentSec = currentDate.getSeconds();

    // let meridiem = currentHour >= 12 ? 'pm' : 'am';
    // currentHour = currentHour % 12;
    // currentHour = currentHour ? currentHour : 12; // the hour '0' should be '12'
    // currentMin = currentMin < 10 ? '0'+currentMin : currentMin;
    // const strTime = currentHour + ':' + currentMin + ' ' + meridiem;
    let strTime;

    if(is12HrFormat) {
        strTime = currentDate.toLocaleTimeString('en-US').replace(/:\d+ /, ' ');
    } else {
        strTime = currentDate.toLocaleTimeString()
    }


    // const time = `${hh}:${mm}:${ss}`
    h1El.innerText = strTime
}

currentTime()
setInterval(currentTime, 1000)