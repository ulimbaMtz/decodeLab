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


/*************************selecting-from-many-options-with-switch-statements***************/

function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line

switch(val){
  case 1:
    answer = "alpha";
    break;
  case 2:
    answer = "beta";
    break;
  case 3:
    answer = "gamma";
    break;
  case 4:
    answer = "delta";
    break;
}
  // Only change code above this line
  return answer;
}

caseInSwitch(2);

/**********use-the-conditional-ternary-operator*************/
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);
