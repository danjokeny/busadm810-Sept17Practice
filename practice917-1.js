//bus adm 810 web app development
//danny forero
// sept 17 practice assignment question #1
/*
1. Write a function that takes two arguments.  
The first is a temperature and the second is the toScale. 
If the toScale argument is C, convert the temperature from Fahrenheit to Celsius. 
If the toScale is F, convert the temperature from Celsius to Fahrenheit. 
*/

//Function to convert from C->F or F->C
//anything in scale other than C or F is returned as an error message
function ConvertTemp(inTemp, inScale) {
    if (inScale == 'C' ) {
        newTemp = inTemp * 1.8 + 32
        newScale = "F"
    } else if (inScale == 'F' ) {
            newTemp = (inTemp - 32) * 0.55555556
            newScale = "C"
    }   else { return( inScale + " is an invalid scale, please use C or F")
    };
    return(inTemp + inScale + " = " + newTemp + newScale);
} ;
    

//Mainline calls to Conversion function multiple times with different input each time

//Convert 35C to F
let temp = 35;
let  scale = 'C';
console.log(ConvertTemp(temp,scale));

//Convert 0F to C
temp = 0;
scale = 'F';
console.log(ConvertTemp(temp,scale));

//Convert 0C to F
temp = 0;
scale = 'C';
console.log(ConvertTemp(temp,scale));

//Convert 10H (should be an error) to C
temp = 10;
scale = 'H';
console.log(ConvertTemp(temp,scale));

//Convert 100C to F
temp = 100;
scale = 'C';
console.log(ConvertTemp(temp,scale));

//Convert 0C to F
temp = 0;
scale = 'C';
console.log(ConvertTemp(temp,scale));