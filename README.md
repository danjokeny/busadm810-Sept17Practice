//bus adm 810 web app development
//danny forero
//Sept17Practice

Four practice excercises for bus adm 810 dated sept 17th

Excercise
You can write code in Node.js that allows the user to enter a value but it's a bit complex at this stage.  So for these exercises, instead of prompting the user for input, you can just declare variables at the top of the file.  For example, number 1 compares two numbers so you can declare them like this:

let temp = 35;
let  scale = 'C';

1. Write a function that takes two arguments.  The first is a temperature and the second is the toScale.  If the toScale argument is C, convert the temperature from Fahrenheit to Celsius.  If the toScale is F, convert the temperature from Celsius to Fahrenheit.  

2. Write a function that has two arguments and returns the higher of the two.  The function should return 'Out of range' if the values are not in the range 40 - 60.  Your code should log the result to the console.

3. Write a function that takes a string like this:
let foo = "5 + 4";
The values (5 and 4) can be any two numbers and the operator can be +, -,  / or *.   The expression should only have two values and one operator.  The function should divide this into parts using a statement like this:
let parts = foo.split(" ");
You can log parts to see the what this does. 
The function should then return the result of the operation.  

4. Write a function that takes three arguments: a longer string and two shorter strings.  The function should replace the instances of the first short string in the longer string with the second short string.  Research the JavaScript replace function to see how to do this.
