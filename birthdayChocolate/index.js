function birthday(s, d, m) {
  let validWays = 0;
  for (let i = 0; i < s.length; i++) {
    if(i + m > s.length)
      return validWays;

    let sum = s.slice(i, i + m).reduce((a,b) => a + b, 0);
    if(sum == d)
      validWays++;
  }

  return validWays;
}

let answer = birthday([2,2,1,3,2], 4, 2); //should return 2
console.log(answer);

let answer2 = birthday([1,2,1,3,2], 3, 2); //should return 2
console.log(answer2);

let answer3 = birthday([1,1,1,1,1,1], 3, 2); //should return 0
console.log(answer3);

let answer4 = birthday([4], 4, 1); //should return 1
console.log(answer4);