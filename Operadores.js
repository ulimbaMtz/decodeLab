/************* add-two-numbers-with-javascript ***/
const sum = 10 + 0;

/*******************subtract-one-number-from-another-with-javascript****************/
//const difference = 45 - 0;
const difference = 45 - 33;

/***************multiply-two-numbers-with-javascript**********/
//const product = 8 * 0;
const product = 8 * 10;

/*****************divide-one-decimal-by-another-with-javascript**********/
//const quotient = 0.0 / 2.0; // Change this line
const quotient = 4.4 / 2.0; // Change this line



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


/****************comparisons-with-the-logical-or-operator****************/
/*function testLogicalOr(val) {
  // Only change code below this line

  if (val) {
    return "Outside";
  }

  if (val) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15); */
function testLogicalOr(val) {
  // Only change code below this line
  var ret ="";

  if (val < 10 || val > 20) {
    return "Outside";
  }

    // Only change code above this line
  return "Inside";
}

testLogicalOr(15);

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


/*************************golf-code (1)*********************************/
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  var ret= "";
 if(strokes == 1){
   ret = names[0];
    }else if(strokes <= par - 2){
      ret = names[1];
    }else if(strokes == par -1){
      ret = names[2];
    }else if(strokes== par){
ret = names[3];
    }else if(strokes == par +1){
      ret = names[4];
    }else if(strokes == par + 2){
ret  = names[5];
    }else if(strokes >= par + 3){
      ret = names[6];
    }

  return ret;
  // Only change code above this line
}

golfScore(5, 4);



/*********************counting-cards***************************/
var count = 0;

function cc(card) {
  // Only change code below this line
  
   var ret="";
  switch (card)
  {
   
      case 2:
      count++;
        break;
      case 3:
      count++;
        break;
      case 4:
      count++;
        break;
      case 5:
      count++;
        break;
      case 6:
       count++;
        break;
       case 7,8,9:     
       count = count;
        break;
        case 10:
         count--;
         break;
       case "J":
       count--;
        break; 
       case "Q":
       count--;
        break; 
       case "K":
       count--;
        break; 
       case "A":
         count--;
        break; 
  }

 if(count > 0){
  ret = count + " Bet";
}else if(count <= 0){
  ret = count + " Hold";
}


  return ret;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');






