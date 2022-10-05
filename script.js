function displayDate () {
var stringDate = moment().format("dddd, MMMM, Do, YYYY, H:mm:ss a");
console.log(stringDate);
$(".current-date-time").text(stringDate);
};

setInterval(displayDate, 1000); //This is saying to run displayDate every second, then prints new date/time every second 




