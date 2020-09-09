function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let neutral = 0;
  let length = arr.length;

  arr.forEach(item => {
    if(item > 0)
      positive++;
    else if(item < 0)
      negative++;
    else
      neutral++;
  });

  console.log( (positive / length).toFixed(6) );
  console.log( (negative / length).toFixed(6) );
  console.log( (neutral / length).toFixed(6) );
}

plusMinus([-4, 3, -9, 0, 4, 1]);

/** Should output
0.500000
0.333333
0.166667
*/
