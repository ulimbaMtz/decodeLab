/****************************use-bracket-notation-to-find-the-nth-character-in-a-string************************/
// Setup
const lastName = "Lovelace";

// Only change code below this line
//const thirdLetterOfLastName = lastName; // Change this line
const thirdLetterOfLastName = lastName[2]; // Change this line


/********************combine-an-array-into-a-string-using-the-join-method*********************/

function sentensify(str) {
  // Only change code below this line
const  arr = str.split(/\W/);
return arr.join(" ");
  // Only change code above this line
}

sentensify("May-the-force-be-with-you");


/*****************reverse-a-string********/
function reverseString(str) {
  var strReverse ="";
  for(let i=str.length-1; i >= 0; i--){
      strReverse += str[i];
  }
  return strReverse;
}

reverseString("hello");


/******************truncate-a-string**************/
function truncateString(str, num) {
  var cad;
  if (str.length > num) {
    cad = str.slice(0, num) + "...";
  } else {
    cad = str ;
  }
  return cad;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

/**************************create-strings-using-template-literals************************/
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  for(let i=0; i<= arr.length-1; i++){
    console.log(`<li class="text-warning">${arr[i]}</li>` );
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);

/****************************apply-functional-programming-to-convert-strings-to-url-slugs***************/
// Only change code below this line
function urlSlug(title) {
  title = title.trim();
  return title.toLowerCase()
    .split(' ')
    .filter(function(args){
      console.log(args);
        return args!='';
      })
    .join("-");
}

// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");

/**************************using-the-test-method****************************/
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line


/*********************split-a-string-into-an-array-using-the-split-method (1)*******************/

function splitify(str) {
  // Only change code below this line
  console.log(str.split(/[^A-Za-z]/));
  return str.split(/[^A-Za-z]/);
  // Only change code above this line
}

splitify("Hello World,I-am code");

/**********************check-for-the-presence-of-an-element-with-indexof***************/

function quickCheck(arr, elem) {
  // Only change code below this line
  var ret = false;
if(arr.indexOf(elem)!=-1){
ret = true;
}
return ret;
  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

/********use-the-every-method-to-check-that-every-element-in-an-array-meets-a-criteria*************/
function checkPositive(arr) {
  // Only change code below this line
  var ret = false;
ret = arr.every(function(currentValue){
      return currentValue > 0;
});

return ret;
  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);
