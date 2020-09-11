function pageCount(n, p) {
  const pageTurns = Math.floor(p / 2);
  const totalTurns = Math.floor(n / 2);

  console.log(Math.min(pageTurns, totalTurns - pageTurns));
}

pageCount(5,3); //should print 1

pageCount(6,2); //should print 1

pageCount(5,4); //should print 0

pageCount(7,5); //should print 1

pageCount(17,13); //should print 2