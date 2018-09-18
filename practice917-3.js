//bus adm 810 web app development
//danny forero
// sept 17 practice assignment question #3
/*
3. Write a function that takes a string like this:
let foo = "5 + 4";
The values (5 and 4) can be any two numbers and the operator can be +, -,  / or *.   
The expression should only have two values and one operator.  
The function should divide this into parts using a statement like this:
    let parts = foo.split(" ");
You can log parts to see the what this does. 
The function should then return the result of the operation.  
*/

//Function to explore split and parse functionality

function parseParts(inString) {
    foo = inString;
    let parts = foo.split(" ");
    inValue1 = parts[0];
    inOp = parts[1] ;
    inValue2 = parts[2];
    console.log('Value1 = ' + inValue1);
    console.log('Operation = ' +inOp);
    console.log('Value2 = ' + inValue2);
    inCalculationN =  parseInt(inValue1,10) + inOp + parseInt(inValue2,10)  ;
    inCalculationX =  eval(inCalculationN);
    return(inCalculationX);
    } ;
    
//Call parseParts function to break down the expression and evaluate it                  

//evaluate "5 + 4"
testString = "5 + 4";
console.log( "the testString is '" + testString + "'");
console.log( "the results is " + parseParts(testString));

//evaluate "60 / 5"
testString = "60 / 5";
console.log( "the testString is '" + testString + "'");
console.log( "the results is " + parseParts(testString)); 

//evaluate "26 - 15"
testString = "26 - 15";
console.log( "the testString is '" + testString + "'");
console.log( "the results is " + parseParts(testString));

//evaluate "6 * 7"
testString = "6 * 7";
console.log( "the testString is '" + testString + "'");
console.log( "the results is " + parseParts(testString)); 