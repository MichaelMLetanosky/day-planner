//Global Variables
var now = moment();
//Sets hours to be 1-9 to ease computations
var hourNum = now.format("HH") - 8

//Displays current day of the week and day of the month in jumbotron
$("#currentDay").text(now.format("dddd, MMMM Do"));

//Compares hour blocks to current and sets color accordingly
function setHour () {

    for (let i=1; i<10; i++){
        //Sets class to past if hour is done
        if (i < hourNum) {
            $("#hour" + i).addClass("past");
        //Sets class to future if hour is yet to come
        } else if (i > hourNum) {
            $("#hour" + i).addClass("future");
        //Sets class to present if current hour
        } else {
            $("#hour" + i).addClass("present");
        };
    };
};

//Takes text from input field and saves it to local storage
function saveEvent() {
    //Gets hour block from which button was pushed
    var saveHour = this.id[4];
    //Pulls text from input field
    var eventText = document.getElementById("hour" + saveHour).value;
    //Saves text to local storage
    localStorage.setItem('hour' + saveHour, eventText);

    //Reloads all field with saved
    reloadEvents();
};

//display local.storage text onto page
function reloadEvents() {
    //Set text of each input field to storage
    for (let i=1; i<10; i++) {
        var hourBlock = document.getElementById("hour" + i);
        var savedBlock = localStorage.getItem('hour' + i);
        console.log(savedBlock)
        if (savedBlock != null) {
            hourBlock.value = savedBlock;
          //Unless there is nothing stored then it wipes the field
        } else {
            hourBlock.value = ""
        };
    };
};


//Listeners and initializations
//Sets up listeners on save buttons
for (let i=1; i<10; i++) {
    var curHour = document.getElementById("save" + i);
    curHour.addEventListener("click", saveEvent);
};

setHour ();
reloadEvents();