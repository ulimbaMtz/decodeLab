
/*****************reverse-a-string********/
function reverseString(str) {
  var strReverse ="";
  for(let i=str.length-1; i >= 0; i--){
      strReverse += str[i];
  }
  return strReverse;
}

reverseString("hello");


/********************combine-an-array-into-a-string-using-the-join-method*********************/

function sentensify(str) {
  // Only change code below this line
const  arr = str.split(/\W/);
return arr.join(" ");
  // Only change code above this line
}

sentensify("May-the-force-be-with-you");



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
