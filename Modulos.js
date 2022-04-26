/*******************use-export-to-share-a-code-block*****************/
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export {uppercaseString, lowercaseString};


/*****************************use-an-iife-to-create-a-module********************/
/*let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
}; */
let funModule = (function(){
 return {isCuteMixin: function(obj) {
  obj.isCute = function() {
    return true;
  };
},
 singMixin: function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
}
}})();



/******************************reuse-javascript-code-using-import**************/
import {uppercaseString, lowercaseString} from './string_functions.js';

// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");
