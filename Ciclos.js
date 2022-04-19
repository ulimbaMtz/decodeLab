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

/****************************reverse-a-string (2)***************************/
function reverseString(str) {
  var strReverse ="";
  for(let i=str.length-1; i >= 0; i--){
      strReverse += str[i];
  }
  return strReverse;
}

reverseString("hello");


/************************************find-the-longest-word-in-a-string (1)*********************/
function findLongestWordLength(str) {
  let cadMax = "";
  let cadStr= str.split(' ');
  cadMax = cadStr[0];
  for(let i= 0; i < cadStr.length; i++){
    if(cadStr[i].length > cadMax.length){
      cadMax = cadStr[i]; 
    }
  }
  return cadMax.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
  

/*************************factorialize-a-number****************/

function factorialize(num) {
  var fact = 1;
  if(num>=0){
    for(let i=num; i>0; i--){
        fact = fact * (i);
    }
  }
  return fact;
}

factorialize(5);
