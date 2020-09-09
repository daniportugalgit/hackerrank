function minMaxSum(arr) {
  //sort the array
  arr.sort((a,b) => a-b);

  //Now the minimum is the sum of the array after removing its last item
  let min = arr.slice(0, arr.length-1).reduce((a,b) => BigInt(a)+BigInt(b));

  //And the maximum is the sum of the array after removing its first item
  let max = arr.slice(1, arr.length).reduce((a,b) => BigInt(a)+BigInt(b));

  console.log(min.toString(), max.toString());
}

minMaxSum([1,2,3,4,5]); //should print 10 14