function sockMerchant(n, ar) {
  let socksByColor = Array(100).fill(0);
  let pairs = 0;

  ar.map(value => socksByColor[value-1]++);

  socksByColor.map(value => pairs += Math.floor(value / 2));

  return pairs;
}

console.log(sockMerchant(7, [1,2,1,2,1,3,2])); //should return 2

console.log(sockMerchant(9, [10,20,20,10,10,30,50,10,20])); //should return 3

//What if I didn't know the max number of items in the array?
function sockMerchant2(n, ar) {
  let socksByColor = new Map();
  let pairs = 0;

  ar.map(value => {
    if(socksByColor.has(value)) {
      socksByColor.set(value, socksByColor.get(value) + 1);
    } else {
      socksByColor.set(value, 1);
    }
  });

  socksByColor.forEach(value => pairs += Math.floor(value / 2));

  return pairs;
}

console.log(sockMerchant2(7, [1,2,1,2,1,3,2])); //should return 2

console.log(sockMerchant2(9, [10,20,20,10,10,30,50,10,20])); //should return 3