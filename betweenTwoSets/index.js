function getTotalX (a, b) {
  let validCount = 0;

  for (let x = 1; x < 100; x++) {
    if(a.every(item => (x % item == 0))) {
      if(b.every(item => (item % x == 0))) {
        validCount++;
      }
    }
  }
  
  return validCount;
}

let count = getTotalX([2,4],[16,32,96]); //should return 3 (because 4, 8 and 16 are the numbers in between)
console.log(count);