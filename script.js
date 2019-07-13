var  century ;
var year;
var month;
var date;
var dayOfTheWeek 
// This is what we expect to be outputed
// initialise empty variables to be used in our function.Their names correspond to our ids in HTML.

var day = function(){

        century = parseInt(document.getElementById("century").value)
        year = parseInt(document.getElementById("year").value)
        month = parseInt(document.getElementById("month").value)
        date = parseInt(document.getElementById("date").value)  
}
var calculate = function() {
    day();
    // call the above function (day)
    dayOfTheWeek = ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date ) % 7;
    document.write(Math.floor(dayNum));
    // Input the formula for finding the day.Used the one on LMS
}





    var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Afua","Afua","Ama"];
    var yourName = maleNames[0]
    console.log("Your name is"+ yourName)


