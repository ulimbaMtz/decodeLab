/************* add-two-numbers-with-javascript ***/
const sum = 10 + 0;


/******introducing-else-statements*********************/
function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }else{
    result = "5 or Smaller";
    }
  
  // Only change code above this line
  return result;
}

testElse(4);




/*************use-conditional-logic-with-if-statements  ***/

function trueOrFalse(wasThatTrue) {
  // Only change code below this line

if(wasThatTrue){
  return "Yes, that was true";
}else{
  return "No, that was false";
}
  // Only change code above this line
}



/***********comparisons-with-the-logical-and-operator***************/
function testLogicalAnd(val) {
  // Only change code below this line

  if (val >= 25 && val <= 50) {  
      return "Yes";
    }

  // Only change code above this line
  return "No";
}

testLogicalAnd(28);
