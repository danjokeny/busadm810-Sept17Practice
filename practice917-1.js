//bus adm 810 web app development
//danny forero
// sept 17 practice assignment question #1
/*
You can write code in Node.js that allows the user to enter a value but it's a bit complex at this stage.  
So for these exercises, instead of prompting the user for input, you can just declare variables at the top of the file.  
For example, number 1 compares two numbers so you can declare them like this:
let temp = 35;
let  scale = 'C';
1. Write a function that takes two arguments.  The first is a temperature and the second is the toScale. 
If the toScale argument is C, convert the temperature from Fahrenheit to Celsius.  
If the toScale is F, convert the temperature from Celsius to Fahrenheit.  
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
