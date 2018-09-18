//bus adm 810 web app development
//danny forero
// sept 17 practice assignment question #1
/*
2. Write a function that has two arguments and returns the higher of the two.  
The function should return 'Out of range' if the values are not in the range 40 - 60.  
Your code should log the result to the console.
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
    
//Call Conversion function three times for three different scenarios

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