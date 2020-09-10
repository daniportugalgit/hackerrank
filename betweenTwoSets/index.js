function getTotalX (a, b) {
  let validCount = 0;

  for (let x = 1; x <= 100; x++) {
    //is x divisible by all the numbers in array a?
    if(a.every(item => (x % item == 0))) {

      //are all the numbers in array b divisible by x?
      if(b.every(item => (item % x == 0))) {
        
        //yes!
        validCount++;
      }
    }
  }
  
  return validCount;
}

let count = getTotalX([2,4],[16,32,96]); //should return 3 (because 4, 8 and 16 are the numbers in between)
//console.log(count);

/*
//get all numbers that divide x evenly (the rest of the division is zero)
function findFactorsOf(x) {
  if(x == 0)
    return [0]; //edge case: zero is the only factor of itself

  let factors = [];

  for (let i = 1; i <= x; i++) {
    if(x % i === 0)
      factors.push(i);
  }

  return factors;
}

//let factorsOf36 = findFactorsOf(36);
//console.log(factorsOf36);
*/