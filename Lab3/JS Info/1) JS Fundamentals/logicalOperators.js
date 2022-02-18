/* 
OR - ||
AND - &&
NOT - !
Nullish Coalescing - ??
*/

// Tasks
alert (null||2||undefined) // ->2
alert (alert(1)||2||alert(3)) //-> 1 2
alert(1&&null&&2) //-> null
alert(alert(1) && alert(2)) //-> 1 undefined
alert(null||2 && 3 || 4) // -> 3

if (age>=14 && age<=90) alert(1)
if (age<14 || age>90) alert(2)
if (!(age>=14 && age<=90 )) alert(2)


// last task 
let answer = prompt('who\'s there?', "")
if (answer == "Admin"){
    let password = prompt('Password?', "")
    alert((password === 'TheMaster')?'Welcome':
    (password === '' || password === null)? 'Canceled':
    'Wrong password')
}else if (answer === null || answer ===''){
    alert('Canceled')
}else{
    alert('I don\'t know you')
}