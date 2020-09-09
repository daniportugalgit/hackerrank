function compareTheTriplets(alice, bob) {
  let scoreAlice = 0;
  let scoreBob = 0;

  for (let i = 0; i < alice.length; i++) {
    if(alice[i] > bob[i])
      scoreAlice++;
    else if(alice[i] < bob[i])
      scoreBob++;
  }

  return [scoreAlice, scoreBob];
}

let answer = compareTheTriplets([5,6,7], [3,6,10]); //should return [1,1]
console.log('answer:', JSON.stringify(answer));