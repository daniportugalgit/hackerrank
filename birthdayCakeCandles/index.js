function birthdayCakeCandles(candles) {
  let max = Math.max(...candles);
  let result = candles.filter(item => item == max);

  return result.length;
}

let answer = birthdayCakeCandles([4,4,1,3]); //should return 2
console.log('answer:', answer);
