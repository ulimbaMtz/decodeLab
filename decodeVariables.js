/*declare-javascript-variables*/
//Declaración de vairables
var myName;


/**********assigning-the-value-of-one-variable-to-another******/
// Setup
var a;
a = 7;
var b;

// Only change code below this line
b = a;


/****storing-values-with-the-assignment-operator*****/
// Setup
var a;

// Only change code below this line

a = 7;

/*understanding-case-sensitivity-in-variables*/
// Variable declarations
//var StUdLyCapVaR;
//var TitleCaseOver;

var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
//STUDLYCAPVAR = 10;
//PRoperCAmelCAse = "A String";
//tITLEcASEoVER = 9000; 

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000; 




/***********iterate-with-javascript-for-loops**************/
// Setup
const myArray = [];

// Only change code below this line
for(let  i=0; i<5; i++){
 myArray.push(i+1);
}

/**************iterate-odd-numbers-with-a-for-loop***********/
// Setup
const myArray = [];

// Only change code below this line
for(let i=1; i<10; i+=2){
 myArray.push(i);
}



/**********************understanding-uninitialized-variables***************/
// Only change code below this line
var a;
var b;
var c;
// Only change code above this line

a = 5;
b =10;
c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";

/******************explore-differences-between-the-var-and-let-keywords***********/
/*var catName = "Oliver";
var catSound = "Meow!";*/
let catName = "Oliver";
let catSound = "Meow!";


/*****************declare-a-read-only-variable-with-the-const-keyword****************/
/*var fCC = "freeCodeCamp"; // Change this line
var fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(fCC, fact); // Change this line */
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

/********************use-the-parseint-function**************/
function convertToInteger(str) {
 return parseInt(str);
}

convertToInteger("56");

/**********************understanding-boolean-values*********/
/*function welcomeToBooleans() {
  // Only change code below this line

  return false; // Change this line

  // Only change code above this line
}*/
function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}

/*************global-vs--local-scope-in-functions**********/
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var  outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();

/*************store-multiple-values-in-one-variable-using-javascript-arrays********/
// Only change code below this line
//const myArray = [];
const myArray = ["Test1",1,"test2",2];
