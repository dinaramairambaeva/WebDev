let a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    alert("this runs, because +a is 1, exactly equals b+1");
    break;

  default:
    alert("this doesn't run");
}

// ------ //
let a = 3;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}


// Task 1

if (browser === 'Edge'){
    alert( "You've got the Edge!" );
}else if(browser === 'Chrome' 
  || browser === 'Firefox' 
  || browser === 'Safari' 
  || browser === 'Opera'){
    alert( 'Okay we support these browsers too' );
}else{

}alert( 'We hope that this page looks ok!' );

//======//
let a = prompt('a?', '');
switch(+a){
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
}