function countingValleys(n, s) {
  let valleys = 0;
  let altitude = 0;

  for (let i = 0; i < s.length; i++) {
    if(s.charAt(i) == 'U') {
      altitude++;
      
      if(altitude == 0)
        valleys++;

    } else {
      altitude--;
    }
  }

  return valleys;
}

console.log(countingValleys(8, 'UDDDUDUU')); //should return 1