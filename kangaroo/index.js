function kangaroo(x1, v1, x2, v2) {
  //always NO: kangaroo 2 is faster and starts ahead; kangaroo 1 will never cath up.
  if(x2 > x1 && v2 > v1) {
    console.log('NO');
    return;
  }

  let minK1 = x1 + v1 * (x1 + v1);
  let minK2 = x2 + v2 * (x1 + v1);

  let maxK1 = x1 + (x2 - x1) * (v1);
  let maxK2 = x2 + (x2 - x1) * (v2);

  if(minK1 == minK2 || maxK1 == maxK2)
    console.log('YES');
  else
    console.log('NO');
}

kangaroo(0, 3, 4, 2); //should print 'YES'
/*
k1: 0, 3, 6,  9, 12, 15, 18, 21, 24, 27, 30
k2: 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24
na posição v1 deu 'no'
na posição x2 deu 'yes'
*/

kangaroo(0, 2, 5, 3); //should print 'NO'
/*
k1: 0, 2,  4,  6,  8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30
k2: 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 50
na posição v1 deu 'no'
na posição x2 deu 'no'
*/

kangaroo(0, 3, 9, 2); //should print 'YES'
/*
k1: 0,  3,  6,  9, 12, 15, 18, 21, 24, 27, 30
k2: 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29
na posição v1 deu 'no'
na posição x2 deu 'yes'
*/

kangaroo(0, 3, 12, 2); //should print 'YES'
/*
k1: 0,  3,  6,   9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39
k2: 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38
na posição v1 deu 'no'
na posição x2 deu 'yes'
*/

kangaroo(0, 3, 6, 1); //should print 'YES'
/*
k1: 0, 3, 6, 9, 12
k2: 6, 7, 8, 9, 10
na posição x1+v1 deu 'yes'
posição x2-x1 nem foi verificada
*/

kangaroo(1, 3, 6, 1); //should print 'NO'
/*
k1: 1, 4, 7, 10, 13, 16, 19
k2: 6, 7, 8,  9, 10, 11, 12
na posição x1+v1 deu 'no'
na posição x2-x1 deu 'no'
*/

kangaroo(1, 3, 6, 2); //should print 'YES'
/*
k1: 1, 4,  7, 10, 13, 16, 19
k2: 6, 8, 10, 12, 14, 16, 18
na posição x1+v1 deu 'no'
na posição x2-x1 deu 'yes'
*/

