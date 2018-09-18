//bus adm 810 web app development
//danny forero
// sept 17 practice assignment question #4
/*
4. Write a function that takes three arguments: a longer string and two shorter strings.  
The function should replace the instances of the first short string in the longer string 
with the second short string.  
Research the JavaScript replace function to see how to do this.
*/

//Function to explore replace functionality

function testReplace(inLong, inShort1, inShort2) {
    var res = inLong.replace(inShort1, inShort2);
    return(res);
} ;
    
//explore the replace function 
var LongStr = "Visit the Univeristy of Wisconsin at Milwaukee's Lubar School of Business today!";
var ShortStr1 =  "the Univeristy of Wisconsin at Milwaukee's Lubar School of Business";
var ShortStr2 =  "UWM Lubar";
console.log( "the LongString is '" + LongStr + "'");
console.log( "the shortString1 to replace  is '" + ShortStr1 + "'");
console.log( "the shortString2 that remains is '" + ShortStr2 + "'");

console.log( "the results is '" + testReplace(LongStr, ShortStr1, ShortStr2)) + "'"; 
