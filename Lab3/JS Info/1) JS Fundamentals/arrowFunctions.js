let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3


//Task 1
function ask(question, yes, no){
    (confirm(question))? yes():no();
}

ask('Do you agree?',
() => alert("You agreed."),
() => alert("You canceled the execution.")
)