//bus adm 810 web app development
//danny forero
// sept 17 practice assignment question #1
/*
2. Write a function that has two arguments and returns the higher of the two.  
The function should return 'Out of range' if the values are not in the range 40 - 60.  
Your code should log the result to the console.
*/

//Function to convert from C->F or assume conversion from F->C
//there is a flaw in this logic in that anything other than C, assumes a conversion from F -> C
//third example in the test results shows that 10H is assumed as 10C and converts to F
function ConvertTemp(inTemp, inScale) {
    //    console.log(inTemp);
    //    console.log(inScale);
        if (inScale = "C" ) {
            newTemp = inTemp * 1.8 + 32
            newScale = "F"
        } else {newTemp = (inTemp - 32) * 0.55555556
                newScale = "C"
                };
    
        return(inTemp + inScale + " = " + newTemp + newScale);
    } ;
    
    //Call Conversion function three times for three different scenarios
    
    //Convert 35C to F
    let temp = 35;
    let  scale = 'C';
    console.log(ConvertTemp(temp,scale));
    
    //Convert 0C to F
    let temp2 = 0;
    let  scale2 = 'H';
    console.log(ConvertTemp(temp2,scale2));
    
    //Convert 10H (code assumes 10C) to F
    let temp3 = 10;
    let  scale3 = 'F';
    console.log(ConvertTemp(temp3,scale3));