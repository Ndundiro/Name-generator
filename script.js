var  century ;
var year;
var month;
var date;
var dayOfTheWeek ;
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Afua","Afua","Ama"];



// This is what we expect to be outputed
// initialise empty variables to be used in our function.Their names correspond to our ids in HTML.



var day = function(){
    century = parseInt(document.getElementById("century").value);
    year = parseInt(document.getElementById("year").value);
    month = parseInt(document.getElementById("month").value);
    date = parseInt(document.getElementById("date").value);
}



function calculate(){
    day();   // call the above function (day)
    dayOfTheWeek = ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date ) % 7;
    return(Math.floor(dayOfTheWeek));
    console.log(dayOfTheWeek);
    // This is the  formula used  for finding the day of the week.The output expected should range 0 - 6
}

function result(){
dayOfTheWeek = calculate();
checkgender();
}
// This code checks the gender input.It gives an alert with a message "input gender" if gender input is not found
var checkgender = function() {
    calculate();
    var gdr = document.getElementsByName("one"); //Try get document by name.same name for each gender
    if(gdr[0].checked == true){
        gender = "male";
    }else if(gdr[1].checked == true ){
        gender = "female";
    }
    else {
        // alert("Input gender")
    }
    
    switch(gender){
        case "male":
        if(dayOfTheWeek == 0){
            document.write("Monday" + MaleNames[0]);
        }else if (day == 1){
            document.write("Tuesday" + maleNames[1]);
        }else if (day == 2){ 
            document.write("Wednesay" + maleNames[2]);
        }else if (day == 3){ 
            document.write("Thursday" + maleNames[3]);
        }else if (day == 4){ 
            document.write("Friday" + maleNames[4]);
        }else if (day == 5){ 
            document.write("Saturday" + maleNames[5]);
        }else { 
            document.write("Sunday" + maleNames[6]);
    }
    break;
    case "female":
            if(dayOfTheWeek == 0){
                document.write("Monday" + femaleNames[0]);
            }else if (day == 1){
                document.write("Tuesday" + femaleNames[1]);
            }else if (day == 2){ 
                document.write("Wednesay" + femaleNames[2]);
            }else if (day == 3){ 
                document.write("Thursday" + femaleNames[3]);
            }else if (day == 4){ 
                document.write("Friday" + femaleNames[4]);
            }else if (day == 5){ 
                document.write("Saturday" + femaleNames[5]);
            }else{ 
                document.write("Sunday" + femaleNames[6]);
            }
    break;
    default:
        console.log("The switch works");
    }



}
// The code above should be able to calculate the day from the date given and also get  gender
 
/*removed arrays*/

    // var output = function (){
    //     if gender = "male"  
    //     function calculate();
    //     if (dayOfTheWeek = 0){
    //         console.log(maleNames[0]);
    //     } else if {
    //         (dayOfTheWeek = 1){
    //             console.log(maleNames[0])
    //         }
    //     }
    //     }
    // }
    // The code below should ouput Akan names if they run sucessfully.
    
