function migratoryBirds(arr) {
  //Cria uma array com 5 posições preenchidas com 0:
  let occurencies = new Array(5).fill(0);

  //Pega as ocorrências de cada item da array e joga na array `occurencies`:
  arr.map(item => occurencies[item-1]++);

  //Da array `occurrencies`, pega o menor índice que tem o maior número de ocorrências:
  let maxOccurencyIndex = occurencies.reduce((bestIndexSoFar, currentItem, currentIndex, array) => currentItem > array[bestIndexSoFar] ? currentIndex : bestIndexSoFar, 0);
  
  //Retorna o índice + 1, pois isso corresponderá ao ID do pássaro:
  return maxOccurencyIndex + 1;
}

console.log(migratoryBirds([1,4,4,4,5,3])); //should return 4

console.log(migratoryBirds([1,2,3,4,5,4,3,2,1,3,4])); //should return 3

/** Notes on Array.prototype.reduce()
reduce() takes two arguments. The first is the function that performs the reduction operation.
The task of this reduction function is to somehow combine or reduce two values into a single value, and to return that reduced value.

Functions used with reduce() are different than the functions used with forEach() and map().
The familiar value, index, and array values are passed as the second, third, and fourth arguments.
The first argument is the accumulated result of the reduction so far. On the first call to the function,
this first argument is the initial value you passed as the second argument to reduce(). On subsequent calls,
it is the value returned by the previous invocation of the function.

When you invoke reduce() with no initial value, it uses the first element of the array as the initial value.
This means that the first call to the reduction function will have the first and second array elements as its first and second arguments.
 */