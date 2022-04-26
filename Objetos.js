/*******************build-javascript-objects**************/

const myDog = {
  // Only change code below this line
name: "Canelas",
legs:4,
tails: 1,
friends: ["chalan","pilon"]
  // Only change code above this line
};


/******************define-a-constructor-function*******************/
function Dog(){
  this.name= "Chalan";
  this.color ="Brown";
  this.numLegs= 4;
}

/**********************use-a-constructor-to-create-objects*******************/
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Only change code below this line

var hound = new Dog();

/***************************extend-constructors-to-receive-arguments**********************/
function Dog(name,color) {
this.name = name;
this.color= color;
this.numLegs = 4;
}

var terrier = new Dog("bolillo","café");


/****************accessing-object-properties-with-dot-notation********************/

// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line


/**************************make-code-more-reusable-with-the-this-keyword***********************/
/*let = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
};*/
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs();

/****************************iterate-through-the-keys-of-an-object-with-a-for---in-statement*********/
const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Only change code below this line
  let contador = 0;
    for(let usuarioObj in usersObj){
      if(usersObj[usuarioObj].online){
        contador +=1;
      }  
    }
  return contador;
  // Only change code above this line
}

console.log(countOnline(users));


/**********************create-a-method-on-an-object*******/
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function(){return "This dog has " + this.numLegs +" legs." }
};

dog.sayLegs();
