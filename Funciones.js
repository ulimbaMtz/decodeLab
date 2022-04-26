/*******************write-reusable-javascript-with-functions******************/
function reusableFunction (){
  console.log("Hi World");
}

reusableFunction();

/************************passing-values-to-functions-with-arguments*****************/
function functionWithArgs(param1, param2){
  var sumGen = param1 + param2;
 console.log(sumGen);
}

functionWithArgs(5,7);

/**************************understanding-undefined-value-returned-from-a-function*********************/
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();

/*********************************returning-boolean-values-from-functions********************************/
function isLess(a, b) {
  // Only change code below this line
  /*if (a < b) {
    return true;
  } else {
    return false;
  }*/
  return a < b;
  // Only change code above this line
}

isLess(10, 15);


/***************find-the-longest-word-in-a-string*********************/

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

/**********************use-the-parseint-function (1)********************/

function convertToInteger(str) {
 return parseInt(str);
}

convertToInteger("56");


/*************************generate-random-fractions-with-javascript**************/
function randomFraction() {

  // Only change code below this line
  var rand = Math.random();
  while(rand == 0){
    rand = math.random();
  }
  return rand;

  // Only change code above this line
}

/**********************generate-random-whole-numbers-with-javascript*****************/
function randomWholeNum() {

  // Only change code below this line
  var rand = Math.floor( Math.random() * 10);
  while(rand<0 & rand >9){
    rand = Math.floor( Math.random() * 10);
  }
  return rand;
}



/***********************return-largest-numbers-in-arrays**************************/
function largestOfFour(arr) {
var arrGen= [];
  for(let i = 0; i< arr.length; i++){
    //for(let j= 0; j< arr[i].length; j++){
      var arrGen1= arr[i];
       arrGen.push(Math.max(...arrGen1));
    //}
  }
  return arrGen;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);



/**************************sum-all-numbers-in-a-range*******************/
function sumAll(arr) {
  var inicio = 0;
  var fin = 0;
  var sumaGen = 0;

  inicio = Math.min(...arr);
  fin = Math.max(...arr);
  
  for(let i = inicio; i<=fin; i++){
    sumaGen= sumaGen+ i;
  }
  return sumaGen;
}

sumAll([1, 4]);



/************************use-arrow-functions-to-write-concise-anonymous-functions*********/
const magic = ()=> {
  const fechas = new Date();
  return fechas;
};

/**************write-arrow-functions-with-parameters**************/
const myConcat = (arr1, arr2) =>{
  return arr1.concat(arr2);
};
console.log(myConcat([1, 2], [3, 4, 5]));


/****************handle-a-fulfilled-promise-with-then*****************/

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
}).then(result=>{
  console.log(result);
});

/*****************handle-a-rejected-promise-with-catch**********/

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

makeServerRequest.catch(error =>{
  console.log(error);
});
