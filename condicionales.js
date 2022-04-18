
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
