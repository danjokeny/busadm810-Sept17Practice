
//bus adm 810 web app development
//danny forero
// sept 17 practice assignment question #2
/*
2. Write a function that has two arguments and returns the higher of the two.  
The function should return 'Out of range' if the values are not in the range 40 - 60.  
Your code should log the result to the console.
*/

//Function to return the higher of two values
function higherValue(inValue1, inValue2) {
    console.log(inValue1);
    console.log(inValue2);
    if (inValue1 >= inValue2 ) 
    {        highValue  = inValue1
    } else {highValue = inValue2  
            };

    if (highValue > 60) { return('out of range high')};
    if (highValue < 40) { return('out of range low')};
    return('the higher value is ' + highValue);
} ;

//Call higherValue function three times for three different scenarios

//compare 45 and 55 
let value1 = 45;
let  value2 = 55;
console.log(higherValue(value1,value2));

//compare 55 and 45 
let value3 = 55;
let  value4 = 45;
console.log(higherValue(value3,value4));

//compare 25 and 35 
let value5 = 25;
let  value6 = 35;
console.log(higherValue(value5,value6));


//compare 55 and 65 
let value7 = 55;
let  value8 = 65;
console.log(higherValue(value7,value8));

