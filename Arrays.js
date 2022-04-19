/*****************store-multiple-values-in-one-variable-using-javascript-arrays*****/

// Only change code below this line
const myArray = ["uno",1,"dos",2];

/***********************access-array-data-with-indexes****/
const myArray = [50, 60, 70];
var myData = myArray[0];

/**************************************modify-array-data-with-indexes*************/
// Setup
const myArray = [18, 64, 99];

// Only change code below this line
myArray[0] = 45;

/******************access-multi-dimensional-arrays-with-indexes*****************/
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

// const myData = myArray[0][0];
const myData = myArray[2][1];



/*********************iterate-through-an-array-with-a-for-loop***********************/
// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;
for(let i= 0; i<myArr.length; i++){
  total += myArr[i];
}

/******************use-the-spread-operator-to-evaluate-arrays-in-place***************/
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

//arr2 = [];  // Change this line
arr2 = [...arr1]; 

console.log(arr2);

/****************check-for-the-presence-of-an-element-with-indexof (2)*****************/
function quickCheck(arr, elem) {
  // Only change code below this line
  var ret = false;
//if(arr.indexOf(elem)!=-1){
  if(arr.indexOf(elem)!=-1){
ret = true;
}
return ret;
  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


/*************manipulate-arrays-with-push.txt*************/
// Setup
const myArray = [["John", 23], ["cat", 2]];

myArray.push(["dog",3]);
// Only change code below this line


// Setup
const myArray = [["John", 23], ["cat", 2]];

var removedFromMyArray = myArray.pop();
console.log(removedFromMyArray);
// Only change code below this line

/******************manipulate-arrays-with-pop*************/

// Setup
const myArray = [["John", 23], ["cat", 2]];

var removedFromMyArray = myArray.pop();
console.log(removedFromMyArray)
// Only change code below this line

// console output
[ 'cat', 2 ]

/**********************manipulate-arrays-with-shift****************/
// Setup
const myArray = [["John", 23], ["dog", 3]];

var removedFromMyArray =  myArray.shift();
console.log(removedFromMyArray);
// Only change code below this line


/**************manipulate-arrays-with-unshift.txt****************/
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul",35]);
console.log(myArray);
// Only change code below this line
/* [ [ 'Paul', 35 ], [ 'dog', 3 ] ]/*

/**************return-part-of-an-array-using-the-slice-method***********/
function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line
    var newArray = anim.slice(beginSlice,endSlice);
return newArray;
  // Only change code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
