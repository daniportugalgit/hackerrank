function minMaxSum(arr) {
  let maxSum = Number.NEGATIVE_INFINITY;
  let minSum = Number.POSITIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    let sum = BigInt(arr[i]);

    let removedIndex = i+1;
    if(removedIndex > arr.length-1)
      removedIndex = 0;

    for (let j = 0; j < arr.length; j++) {
      if(i != j && j != removedIndex) {
        sum += BigInt(arr[j]);
      }
    }

    if(sum < minSum)
      minSum = sum;

    if(sum > maxSum)
      maxSum = sum;
  }

  console.log(minSum, maxSum);
}

minMaxSum([1,2,3,4,5]); //should print 10 14