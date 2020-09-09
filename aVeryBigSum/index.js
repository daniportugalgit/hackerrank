function aVeryBigSum(list) {
  return list.reduce((a, b) => BigInt(a) + BigInt(b), 0);
}

let answer = aVeryBigSum([1000000000, 1000000001, 1000000002, 1000000003, 1000000004, 1000000005]);
console.log('answer:', answer);
