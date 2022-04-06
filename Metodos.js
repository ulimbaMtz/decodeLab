
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
