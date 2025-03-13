const timeElement = document.getElementById('time')
const dateElement = document.getElementById('date')
const amPm = document.getElementById('ampm');

function getTime(){
    const time = new Date();
    const hour = (time.getHours())%12||12;
    const hours = hour<10?'0'+hour:hour;
    // const minutes = time.getMinutes().toString().padStart(2,'0');
    const minutes = time.getMinutes()<10?'0'+time.getMinutes():time.getMinutes();
    const seconds = time.getSeconds();
    second = seconds<10?'0'+seconds:seconds;
    const ampm = time.getHours()<=12?'AM':'PM';
    timeElement.innerText = `${hours}:${minutes}:${second}:${ampm}`

    const options = {
        weekday:"long", //we can set it as short
        year:"numeric",
        month:"long",
        day:"numeric"
    }

    // basic code to set the date part without using the toLocalDatesString


    // const year = time.getFullYear();
    // const monthname = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    // const month = time.getMonth();
    // const day = time.getDate()<10?'0'+time.getDate():time.getDate();
    // dateElement.innerText = `${day}-${monthname[month+1]}-${year}`


    const datestring = time.toLocaleDateString(undefined,options)
    dateElement.innerText = `${datestring}`
}

setInterval(getTime,1000)

getTime();
