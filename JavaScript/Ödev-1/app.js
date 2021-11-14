const getGuestName = () => {
  const name = prompt('Adınız nedir?', 'Bir garip misafir');
  document.querySelector('#prompt-name').innerText = name;
}


function currentTime() {
    const d = new Date();
    let day = d.getDay();
    let hours = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();
  
    if (hours < 10) {
      hours = '0' + hours;
    }
    if (minute < 10) {
      minute = '0' + minute;
    }
    if (second < 10) {
      second = '0' + second;
    }
  
    let theDay;
  
    switch (day) {
      case 0:
        theDay = 'Pazar';
        break;
      case 1:
        theDay = 'Pazartesi';
        break;
      case 2:
        theDay = 'Salı';
        break;
      case 3:
        theDay = 'Çarşamba';
        break;
      case 4:
        theDay = 'Perşembe';
        break;
      case 5:
        theDay = 'Cuma';
        break;
      case 6:
        theDay = 'Cumartesi';
        break;
    }
  
    document.getElementById(
      'pageClock'
    ).innerHTML = `${hours} : ${minute} : ${second} ${theDay} `;
  
    let t = setTimeout(function () {
      currentTime();
    }, 1000);
  }
  currentTime();


getGuestName();
showCurrentDayAndTime();