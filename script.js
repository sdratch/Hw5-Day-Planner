

//display date using moment
$("#currentDay").text(moment().format("dddd[,] MMMM Do"))

//get current time
var currentHour = moment().hour();
//currentHour = 12;

//get plans from local storage, make a new empty array of length 9 if first time coming to site
var timePlans = JSON.parse(localStorage.getItem("plans"));
if(timePlans === null){
    timePlans = new Array(9);
}

//adds time layout with classes to sheet
//for loop to utilize the time
for(var i = 9; i<18;i++){
    var workHour = i
    
//create a row dive and append it to the contianer
var timeSlot = $("<div>");
timeSlot.addClass("row")
$(".container").append(timeSlot);

//create the 3 column sections in each row and give them the appropriate classes
var hourDisplay = $("<div>");
var textArea = $("<textarea>");
var saveBttn = $("<button>");
hourDisplay.addClass("col-1 hour")
textArea.addClass("col-10 description")
//give the text area a row number attribute
textArea.attr("row-number",(i-9))

//if else statement to determine color
if(workHour<currentHour){
    textArea.addClass("past")
}
else if(workHour===currentHour){
    textArea.addClass("present")
}
else{
    textArea.addClass("future")
}

//add the text back in from local storage
textArea.text(timePlans[i-9]);

saveBttn.addClass("col-1 saveBtn")
//adjust the time that is to display on the first column
if(i>12){
    workHour = workHour - 12
    workHour = workHour +"PM"
}
else{
    workHour = workHour +"AM"
}
hourDisplay.text(workHour)

//add the save icon to the save button
saveBttn.html("<i class = 'fas fa-save'></i>")

//append the three elements to the row
timeSlot.append(hourDisplay)
timeSlot.append(textArea)
timeSlot.append(saveBttn)
}

//gets the sibiling text and saves it to local storage
 $(".saveBtn").on("click",function(){
    var textArea = $(this).siblings()[1]
    timePlans[$(textArea).attr("row-number")] = $(textArea).val()
    localStorage.setItem("plans", JSON.stringify(timePlans))
 })

//save form input to local storage when save button is complete