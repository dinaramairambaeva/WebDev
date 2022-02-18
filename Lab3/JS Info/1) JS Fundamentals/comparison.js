alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1

let a = 0;
alert( Boolean(a) ); // false
let b = "0";
alert( Boolean(b) ); // true
alert(a == b); // true!

alert( 0 === false ); // false, because the types are different

alert( null === undefined ); // false
alert( null == undefined ); // true


// The values null and undefined equal == each other and do not equal any other value.

// Task 1
5>4 //true
"apple" > "pineapple" //false
'2'>'12' //true
undefined == null //true
undefined === null //false
null == "\n0\n" //false
null === +"\n0\n" //false