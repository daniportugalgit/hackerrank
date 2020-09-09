function diagonalDifference(arr) {
  let primaryDiagonal = 0;
  let secondaryDiagonal = 0;

  for (let i = 0; i < arr.length; i++) {
    primaryDiagonal += arr[i][i];
    secondaryDiagonal += arr[arr.length-1-i][i];
  }

  return Math.abs(primaryDiagonal - secondaryDiagonal);
}

let squareMatrix = [[1,2,3], [4,5,6], [9,8,9]];
let answer = diagonalDifference(squareMatrix); //should return 2
console.log('answer:', answer);

/*
[0,0] [0,1] [0,2]

[1,0] [1,1] [1,2]

[2,0] [2,1] [2,2]
*/