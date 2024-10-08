console.log("It works!")

// *** Global variables ***
console.log("-----Global-----");
// anything that is in the global scope is attached to the window object with the exception of const and let variables.
const first = "wes";
console.log(first);

let second = "bos";
var globalAge = 100;

function sayHi() {
  console.log("Hi!")
}

const age = 100;

function  go() {
  const hair = 'blonde';
  const myAge = 200;
  console.log(hair);
  console.log(myAge);
};

console.log(age);
go()

// *** Block Scoping
//  Whenever you have a set of curly brackets like in the if statement above, that is what is referred to as a block.
console.log("-----Block-----")

let cool;
if(1 === 1) {
  cool = true;
}

console.log(cool)

function isLame(name) {
  let lame;

  if(name === "wes") {
    lame = false;
  }
  
  console.log(lame);
  return lame;
}

isLame("wes");

const dog = 'snickers';


function logDog() {
  console.log(dog);
}

function go2 () {
  const dog = 'sunny';
  logDog('Rufus');
}

go2();
