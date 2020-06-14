

//console.log(moment().format("dddd MMMM Do"));
//display date
$("#currentDay").text(moment().format("dddd[,] MMMM Do"))

//get current time
var currentHour = moment().hour();
//currentHour = 12;
//add new divs with classes to sheet

for(var i = 9; i<18;i++){
    var workHour = i
    console.log(workHour)
    
//check time for hour and change class for the text
var timeSlot = $("<div>");
timeSlot.addClass("row")
$(".container").append(timeSlot);

var hourDisplay = $("<div>");
var textArea = $("<textarea>");
var saveBttn = $("<button>");
hourDisplay.addClass("col-1 hour")
textArea.addClass("col-10 description")

if(workHour<currentHour){
    textArea.addClass("past")
    console.log(workHour)
}
else if(workHour===currentHour){
    textArea.addClass("present")
    console.log(workHour)
}
else{
    textArea.addClass("future")
    console.log(workHour)
}

saveBttn.addClass("col-1 saveBtn")

if(i>12){
    workHour = workHour - 12
    workHour = workHour +"PM"
}
else{
    workHour = workHour +"AM"
}

hourDisplay.text(workHour)
saveBttn.html("<i class = 'fas fa-save'></i>")

timeSlot.append(hourDisplay)
timeSlot.append(textArea)
timeSlot.append(saveBttn)
}


// $(".saveBtn").on("click",function(){

// })

//save form input to local storage when save button is complete