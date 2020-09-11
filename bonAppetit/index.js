function bonAppetit(bill, annaWontEatThisIndex, annaPayment) {
  bill.splice(annaWontEatThisIndex, 1);
  let half = bill.reduce((a,b) => a + b, 0) / 2;
  
  if(annaPayment > half)
    return annaPayment - half;
  else
    return 'Bon Appetit';
}

console.log(bonAppetit([3,10,2,9], 1, 12)); //should return 5

console.log(bonAppetit([3,10,2,9], 1, 7)); //should return 'Bon Appetit'