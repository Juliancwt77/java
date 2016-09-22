var words = ["hello", "what", "is", "up", "dude"]
// lengths(words)  # => [5, 4, 2, 2, 4]
function long1(words) {
    console.log(long1.length);
  }


  // short 1

  function maxOfTwoNumbers(i,j) {

  if (i > j) { return i;

  } else { return j;

  }

  }

  console.log(maxOfTwoNumbers(3,2));

  // short2

  function maxOfThree(i,j,k) {

  if (i > j && i > k) { return i;

  } else if (j > k && j > i) { return j;

  }
  else { return k;

  }
}

console.log(maxOfThree(3,2,1));
