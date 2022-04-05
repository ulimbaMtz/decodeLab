/*******************write-reusable-javascript-with-functions******************/
function reusableFunction (){
  console.log("Hi World");
}


/***************find-the-longest-word-in-a-string*********************/

function findLongestWordLength(str) {
  let cadMax = "";
  let cadStr= str.split(' ');
  cadMax = cadStr[0];
  for(let i= 0; i < cadStr.length; i++){
    if(cadStr[i].length > cadMax.length){
      cadMax = cadStr[i]; 
    }
  }
  return cadMax.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

/************************use-arrow-functions-to-write-concise-anonymous-functions*********/
const magic = ()=> {
  const fechas = new Date();
  return fechas;
};

/**************write-arrow-functions-with-parameters**************/
const myConcat = (arr1, arr2) =>{
  return arr1.concat(arr2);
};
console.log(myConcat([1, 2], [3, 4, 5]));
