let message = "hello";
message = 123456; // variable can store a number then a string

/* data types:
number (Infinity, NaN - not a number) - range: |2^53 -1|
BigInt - bigger than integer
String 
Boolean
null (value)
undefined (value)
object 
symbol
*/

let age;
alert(age); // shows "undefined"

let age = 100;
age = undefined; // change the value to undefined
alert(age); // "undefined"

// there is also opertor typeof as type() in python


// ------ //

//Task 1 
 
let name = 'Iliya';
alert('hello${1}'); //hello 1
alert('hello${"name"}'); // hello name
alert('hello${name}'); //hello Iliya
