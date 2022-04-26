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
