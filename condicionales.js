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


/**************Logical Order in If Else Statements*******/
/*function orderMyLogic(val) {
  if (val < 10) {
    return "Less than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Greater than or equal to 10";
  }
} 

orderMyLogic(7);*/

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);

/*****************comparison-with-the-inequality-operator**************/
// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

/********************comparison-with-the-inequality-operator************************/
// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);


/**************comparison-with-the-greater-than-or-equal-to-operator****************/
function testGreaterOrEqual(val) {
  if (val>=20) {  // Change this line
    return "20 or Over";
  }

  if (val>=10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

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



/****************adding-a-default-option-in-switch-statements************/
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
  switch(val){
    case "a":
      answer = "apple";
    break;
    case "b":
      answer = "bird";
    break;
    case "c":
      answer = "cat";
    break;
    default:
      answer = "stuff";
    break;
  }


  // Only change code above this line
  return answer;
}

switchOfStuff(1);


/**************multiple-identical-options-in-switch-statements*******/
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
switch(val){
  case 1:
  case 2:
  case 3:
    answer = "Low";
    break;
  case 4:  
  case 5:
  case 6:
    answer = "Mid";
    break;
  case 7:  
  case 8:
  case 9:
    answer = "High";
    break;
}
  // Only change code above this line
  return answer;
}

sequentialSizes(1);

/**********use-the-conditional-ternary-operator*************/
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);
