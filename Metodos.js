/****************************use-bracket-notation-to-find-the-nth-character-in-a-string************************/
// Setup
const lastName = "Lovelace";

// Only change code below this line
//const thirdLetterOfLastName = lastName; // Change this line
const thirdLetterOfLastName = lastName[2]; // Change this line


/********************combine-an-array-into-a-string-using-the-join-method*********************/

function sentensify(str) {
  // Only change code below this line
const  arr = str.split(/\W/);
return arr.join(" ");
  // Only change code above this line
}

sentensify("May-the-force-be-with-you");


/*****************reverse-a-string********/
function reverseString(str) {
  var strReverse ="";
  for(let i=str.length-1; i >= 0; i--){
      strReverse += str[i];
  }
  return strReverse;
}

reverseString("hello");


/******************truncate-a-string**************/
function truncateString(str, num) {
  var cad;
  if (str.length > num) {
    cad = str.slice(0, num) + "...";
  } else {
    cad = str ;
  }
  return cad;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

/**************************create-strings-using-template-literals************************/
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  for(let i=0; i<= arr.length-1; i++){
    console.log(`<li class="text-warning">${arr[i]}</li>` );
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);

/****************************apply-functional-programming-to-convert-strings-to-url-slugs***************/
// Only change code below this line
function urlSlug(title) {
  title = title.trim();
  return title.toLowerCase()
    .split(' ')
    .filter(function(args){
      console.log(args);
        return args!='';
      })
    .join("-");
}

// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");

/**************************using-the-test-method****************************/
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line


/*********************split-a-string-into-an-array-using-the-split-method (1)*******************/

function splitify(str) {
  // Only change code below this line
  console.log(str.split(/[^A-Za-z]/));
  return str.split(/[^A-Za-z]/);
  // Only change code above this line
}

splitify("Hello World,I-am code");

/**********************check-for-the-presence-of-an-element-with-indexof***************/

function quickCheck(arr, elem) {
  // Only change code below this line
  var ret = false;
if(arr.indexOf(elem)!=-1){
ret = true;
}
return ret;
  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

/********use-the-every-method-to-check-that-every-element-in-an-array-meets-a-criteria*************/
function checkPositive(arr) {
  // Only change code below this line
  var ret = false;
ret = arr.every(function(currentValue){
      return currentValue > 0;
});

return ret;
  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);


/****************************use-the-some-method-to-check-that-any-elements-in-an-array-meet-a-criteria********************/
function checkPositive(arr) {
  // Only change code below this line
  var ret = false;
  ret = arr.some(function(positivo){
      return positivo > 0;
  });
  return ret;
  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);


/*************************return-a-sorted-array-without-changing-the-original-array***************************/
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  var retArray = [];
retArray= retArray.concat(arr).sort(function(prim, seg) {
    return prim - seg;
  });
return retArray;
  // Only change code above this line
}

nonMutatingSort(globalArray);


/**************************add-elements-to-the-end-of-an-array-using-concat-instead-of-push************************/
function nonMutatingPush(original, newItem) {
  // Only change code below this line
  //return original.push(newItem);
  var arr = [];
  arr = original.concat(newItem);
  return arr;
  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingPush(first, second);

/*********************************use-the-filter-method-to-extract-data-from-an-array*************************/
// The global variable
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

// Only change code below this line
const filteredList = watchList.filter(function(rating){
  return rating.imdbRating>= 8.0;
}).map(function(pelicula) {
    return {
      title: pelicula.Title,
      rating: pelicula.imdbRating
   };
  });


/*************************METODOS AUXILIARES, DATE, TIME, NUMBERS, MATH ETC.*******************************/
/*
getFullYear()	Get the year as a four digit number (yyyy)
getMonth()	Get the month as a number (0-11)
getDate()	Get the day as a number (1-31)
getHours()	Get the hour (0-23)
getMinutes()	Get the minute (0-59)
getSeconds()	Get the second (0-59)
getMilliseconds()	Get the millisecond (0-999)
getTime()	Get the time (milliseconds since January 1, 1970)
getDay()	Get the weekday as a number (0-6)
Date.now()	Get the time. ECMAScript 5.*/

function reloj() {
  
    
    var digital = new Date();
    var hours = digital.getHours();
    var minutes = digital.getMinutes();
    var seconds = digital.getSeconds();
    
    var amOrPm = "a.m.";
    
    //if (hours > 11) amOrPm = "p.m.";
    //if (hours > 12) hours = hours - 12;
    //if (hours == 0) hours = 12;
    if (minutes <= 9) minutes = "0" + minutes;
    if (seconds <= 9) seconds = "0" + seconds;

    dispTime = hours + ":" + minutes;  //+ ":" + seconds + " " + amOrPm;

    var fecha = new Date();
    var diames = fecha.getDate();
    var diasemana = fecha.getDay();
    var mes = fecha.getMonth() + 1;
    var ano = fecha.getFullYear();

    var textosemana = new Array(7);
    textosemana[0] = "Domingo";
    textosemana[1] = "Lunes";
    textosemana[2] = "Martes";
    textosemana[3] = "Miércoles";
    textosemana[4] = "Jueves";
    textosemana[5] = "Viernes";
    textosemana[6] = "Sábado";

    var textomes = new Array(12);
    textomes[1] = "Enero";
    textomes[2] = "Febrero";
    textomes[3] = "Marzo";
    textomes[4] = "Abril";
    textomes[5] = "Mayo";
    textomes[6] = "Junio";
    textomes[7] = "Julio";
    textomes[7] = "Agosto";
    textomes[9] = "Septiembre";
    textomes[10] = "Octubre";
    textomes[11] = "Noviembre";
    textomes[12] = "Diciembre";

    var fecha = diames + ' ' + textomes[mes] + ' ' + ano + ' / ';  

    return fecha + dispTime;
}

//SALIDA EJEMPLO
//Jueves 28/Abril/2022	13:35:15 hrs.

/************************NUMEROS******************************/
Number.isInteger(1); //true
Number.isInteger('1'); //false
Number.isInteger(false); //false


Number.isNaN(1); //false
Number.isNaN('NaN'); //false
Number.isNaN(NaN); //true
Number.isNaN(0 / 0); //true

var number = 1.23456789;
console.log(number.toFixed(2));
console.log(number.toFixed(3));
console.log(number.toFixed(4));

//1.23
//1.235
//1.2346


