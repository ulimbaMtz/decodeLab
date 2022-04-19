/************iterate-with-javascript-while-loops*****************/
// Setup
const myArray = [];
let i = 5;

while(i>=0){
  myArray.push(i);
  i--;
}

// Only change code below this line

/************************iterate-with-javascript-for-loops************/
// Setup
const myArray = [];

for (let i= 1; i<=5; i++){
  myArray.push(i);
}
// Only change code below this line


/***********************prevent-infinite-loops-with-a-valid-terminal-condition*************/

/*function myFunc() {
  for (let i = 1; i != 4; i += 2) {
    console.log("Still going!");
  }
}*/
function myFunc() {
  for (let i = 1; i <= 4; i += 2) {
    console.log("Still going!");
  }
}


//*********************infite loop preventtion*****************/

// Setup
const myArray = [];
let i = 1;

// Only change code below this line
do{
  myArray.push(i);
}while (i < 5);

  Potential infinite loop detected on line 6. Tests may fail if this is not changed.
  
  // Setup
const myArray = [];
let i = 1;

// Only change code below this line
do{
  myArray.push(i);
  i++; //previniendo loop
}while (i < 5);


// Only change code below this line

/************************iterate-through-the-keys-of-an-object-with-a-for---in-statement (1)**************/
/*CONTAR USUARIOS*/

  const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Only change code below this line
  let contador = 0;
    for(let usuarioObj in usersObj){
      if(usersObj[usuarioObj].online){
        contador +=1;
      }  
    }
  return contador;
  // Only change code above this line
}

console.log(countOnline(users));
  
