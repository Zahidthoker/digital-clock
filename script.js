const timeElement = document.getElementById('time')
const dateElement = document.getElementById('date')
const amPm = document.getElementById('ampm');

function getTime(){
    const time = new Date();
    const hour = (time.getHours())%12;
    const minutues = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = time.getHours()<=12?'AM':'PM';
    timeElement.innerText = `${hour}:${minutues}:${seconds}:${ampm}`

    const year = time.getFullYear();
    const monthname = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const month = time.getMonth();
    const day = time.getDate();

    dateElement.innerText = `${day}-${monthname[month+1]}-${year}`
}

setInterval(getTime,1000)

getTime();
