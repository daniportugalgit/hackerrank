function simpleArraySum(list) {
  return list.reduce((a, b) => a + b, 0);
}

let answer = simpleArraySum([1,2,3,4,10,11]); //should return 31
console.log('answer:', answer); 