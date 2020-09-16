$(document).ready( function() {

  function displayTime() {
    // For time display
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    
    let ampm = ""
    
    if (hours >= 0 && hours < 12) {
        ampm = "AM"
    } else {
        ampm = "PM"
    }

    // This gets a "handle" to the clock div in our HTML
    let clockDiv = document.getElementById('clock');

    // Then we set the text inside the clock div 
    // to the hours, minutes, and seconds of the current time
    clockDiv.innerText = hours + ":" + minutes + ":" + seconds + ampm;
    
    let dateDiv = document.getElementById('date');
    //set inner text
    dateText = currentTime.toDateString();
    dateDiv.innerText = dateText;
  }


  // This runs the displayTime function the first time
  setInterval(displayTime, 1000);

});