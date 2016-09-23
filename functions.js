// long1 -incomplete
// 1. iterate the array given into the function
// 1.1 create a temp variable to hold the array of lengths.
// 2. within the loop, find the length of each one
// 3. return an array of lengths


var words = ["hello", "what", "is", "up", "dude"];



function long1(arr) {

var myarray = [];

for (var i = 0; i < arr.length; i++) {

  myarray.push(arr[i].length);

}
return myarray;
}
console.log(long1(words));







// long 2

function long2(i,j,k){

  var l = i * j;

return Math.pow(l,k);

}

  console.log(long2(5,4,3)); // 8000
  console.log(long2(13,12,5)); // 92389579776
  console.log(long2(42,13,7)); //14466001271480793000


  // long3

  function long3(str) {

    var arrStrings = str.split(" ").reverse().join(" ");
    console.log(arrStrings);

}

  long3("i am happy");







  // short 1

  function short1(i,j) {

  if (i > j) { return i;

  } else { return j;

  }

  }

  console.log(short1(3,2));

  // short2

  function short2(i,j,k) {

  if (i > j && i > k) { return i;

  } else if (j > k && j > i) { return j;

  }
  else { return k;

  }
}

console.log(short2(3,2,1));

// short3

function short3(i) {

// return true if it is a vowel, return false if otherwise

  if (i === "a" || i === "e" || i === "i" || i === "o" ||i === "u" ) {

        return true;

  } else { return false;

  }
}

console.log(short3("b"));

// question 3 alternate answer - wrong answer
//
// function isCharacterVowel(str) [
//   var isVowel = false;
    // var str = str.toLowerCase(); - change to lower case
// ]
//
// var vowels = [ 'a', 'e', 'i', 'o', 'u'];
//
// for ( var i =0; i < vowels.length; i++) {
//     console.log(vowels[i]);
//
//     if (vowels[i] === str ) {
//         isvowel = true;
//     } else {
//
//         isvowel = false;
//     }
// return isVowel;
//
//     }
//
// console





// short4
function short4muliple(arr) {
  var product = 1;
for(var i = 0; i < arr.length; i++){
  for(var j = 0; j < arr[i].length; j++){
  console.log(product *= arr[i][j]);
}
}
  return product;
}
function short4add(arr) {
  var addition = 0;
for(var i = 0; i < arr.length; i++){
  for(var j = 0; j < arr[i].length; j++){
  console.log(addition += arr[i][j]);
}
}
  return addition;

}

short4muliple([[3],[2],[3]]);
short4add([[3],[2],[3]]);

// short5

function short5(i) {
  for (var i = 0; i < arguments.length; i++) {
    return (arguments.length);

  }
}

console.log(short5(1,3,4,"tst"));

// short6

function short6(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

console.log(short6('apple'));

// short7 - not completed

// write a function findLongestWords
// tae an array of words
// return the length of the longest words

function findLongestWords(arr) {

  var longestWordsLength = 0

//   check which is the longest words from the array

  for(var i = 0; i < arr.length; i++){

//      check what is the arr[i] length

//     console.log(arr[i].length);

    // if yes update

    console.log(arr[i]);

    // check what is the arr[i] length
    console.log(arr[i].length);

    if ( longestWordsLength < arr[i].length ){
      longestWordsLength = arr[i].length;

        }
    }
return longestWordsLength;
}


console.log(findLongestWords(["abc", "werwerew", "adasda"]));

// short 8 -incomplete


var words = ["hello", "what", "is", "up", "dude"];


function long1(arr, wordLength) {

var myarray = [];


for (var i = 0; i < arr.length; i++) {



if (arr[i].length > wordLength) {

  myarray.push(arr[i]);

}
}
return myarray;
}
console.log(long1(["hello", "what", "is", "up", "dude"], 3));
