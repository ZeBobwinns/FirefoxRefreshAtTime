/*
Just draw a border round the document.body.
*/


setTimeoutUsingTime(9, 44, 58, 500)
function setTimeoutUsingTime(futureHr, futureMin, futureSec, futureMs) {
    var currentTime = new Date();
    var futureDate = new Date();

    futureDate.setFullYear(currentTime.getFullYear());
    futureDate.setMonth(currentTime.getMonth());
    futureDate.setDate(currentTime.getDate());
    futureDate.setHours(futureHr);
    futureDate.setMinutes(futureMin);
    futureDate.setSeconds(futureSec);
    futureDate.setMilliseconds(futureMs);
    console.log("Time when refresh: " + futureDate.toString());

    var milliTillTimeout = futureDate.getTime() - currentTime.getTime(); //getTime gets the milisecs since 1970.
    console.log("Time until refresh: " + milliTillTimeout);
    if (milliTillTimeout > 0 ) {

        milliTillTimeout = milliTillTimeout + random(500);

        setTimeout(function() {
            refresh()}
        , milliTillTimeout);
    }
}

function refresh() { 
    console.log("reloading!");
    window.location.reload();
}

function random(number) {
    return Math.floor(Math.random()*number);
  }