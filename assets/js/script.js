//Global Variables

//Displays current day of the week and day of the month
var now = moment();
$("#currentDay").text(now.format("dddd, MMMM Do"));

//Check current hour and compare to hour blocks
function setHour () {
    for (let i=9; i<18; i++){
        //Sets class to past if hour is done
        if (i < now.format("HH")) {
            $("#hour" + i).addClass("past");
        //Sets class to future if hour is yet to come
        } else if (i > now.format("HH")) {
            $("#hour" + i).addClass("future");
        //Sets class to present if current hour
        } else {
            $("#hour" + i).addClass("present");
        };
    };
};

setHour ();

//Check time to set correct past/present/future colors

//Grab info from form when save button is pressed
//Set info from form to local.storage
//display local.storage text onto page