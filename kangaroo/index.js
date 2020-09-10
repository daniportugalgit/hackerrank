function kangaroo(x1, v1, x2, v2) {
  let response = 'NO';
  let canCatchUp = (v2 < v1);

  //x1 + (jumps * v1) = x2 + (jumps * v2);
  //x1 = x2 + (jumps * v2) - (jumps * v1);
  //x1 - x2 = (jumps * v2) - (jumps * v1);
  //x1 - x2 = jumps * (v2 - v1);
  //(x1 - x2) / (v2 - v1) = jumps;
  //if (x1 - x2) / (v2 - v1) has rest 0, kangaroos meet; else, they don't (they meet in the air, but that's not what we are looking for).

  if(canCatchUp) {
    if((x1 - x2) % (v2 - v1) == 0)
      response = 'YES';
  }

  console.log(response);
}

kangaroo(0, 3, 4, 2); //should print 'YES'
kangaroo(0, 2, 5, 3); //should print 'NO'
kangaroo(0, 3, 9, 2); //should print 'YES'
kangaroo(0, 3, 12, 2); //should print 'YES'
kangaroo(0, 3, 6, 1); //should print 'YES'
kangaroo(1, 3, 6, 1); //should print 'NO'
kangaroo(1, 3, 6, 2); //should print 'YES'