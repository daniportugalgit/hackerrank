function birthdayCakeCandles(candles) {
  //sort the array:
  candles.sort((a,b) => a-b);

  let max = candles[candles.length-1];
  let count = 0;
  
  //find how many ocurrencies of the last number:
  for (let i = 0; i < candles.length; i++) {
    if(candles[i] == max)
      count++;
  }

  return count;
}

let answer = birthdayCakeCandles([4,4,1,3]); //should return 2
console.log('answer:', answer);
