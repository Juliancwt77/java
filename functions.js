// long1

var words = ["hello", "what", "is", "up", "dude"]

function long1(words) {
    console.log(long1.length);
  }

// long 2

function long2(i,j,k){

  var l = i * j;

return Math.pow(l,k);

}

  console.log(long2(5,4,3)); // 8000
  console.log(long2(13,12,5)); // 92389579776
  console.log(long2(42,13,7)); //14466001271480793000


  // long3

  function short6(str) {
      var newString = "";
      for (var i = str.length - 1; i >= 0; i--) {
          newString += str[i];
      }
      return newString;
  }

  console.log(short6('apple'));






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
  if (i === "a" || i === "e" || i === "i" || i === "o" ||i === "u" ) {

        return true;

  } else { return false;

  }
}

console.log(short3("b"));

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
function short7(arr) {
for(var i = 0; i < arr.length; i++){

  return (arr[i].length);

  var j = (arr[i].length);

}
}

console.log(Math.max(arr[i].length));

// short 8
