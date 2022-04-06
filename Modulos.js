/*******************use-export-to-share-a-code-block*****************/
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export {uppercaseString, lowercaseString};


/******************************reuse-javascript-code-using-import**************/
import {uppercaseString, lowercaseString} from './string_functions.js';

// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");
