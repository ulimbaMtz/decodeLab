/*****************use-conditional-logic-with-if-statements******************/
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
if(wasThatTrue){
  return "Yes, that was true";
 }else{
   return "No, that was false";
 }


  // Only change code above this line

}


/**********************comparison-with-the-strict-equality-operator*****************/
// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);



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



/*********************chaining-if-else-statements***************************/
function testSize(num) {
  // Only change code below this line
  var ret  = "";
if(num<5){  
  ret = "Tiny";
}else if(num <10){
  ret = "Small";
}else if(num <15){
  ret = "Medium";
}else if(num <20){
  ret = "Large";
}else if(num>=20){
  ret = "Huge";
}

  return ret;
  // Only change code above this line
}

testSize(7);


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
