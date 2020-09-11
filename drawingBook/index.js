function pageCount(n, p) {
  //starting from the beginning:
  if(p == 1 || p == n || (n % 2 != 0 && p == n-1)) {
    console.log(0); //first or last page; or the page before the last if there is an odd number of pages
    return;
  }

  let countFromTheBeginning = Math.floor(p / 2);
  
  //starting from the end:
  let countFromTheEnd = Number.MAX_VALUE;
  if(n % 2 == 0) {
    countFromTheEnd = Math.floor((n - p) / 2);
  } else {
    countFromTheEnd = Math.ceil((n - p) / 2);
  }

  console.log(Math.min(countFromTheBeginning, countFromTheEnd));
}

pageCount(5,3); //should print 1

pageCount(6,2); //should print 1

pageCount(5,4); //should print 0

pageCount(7,5); //should print 1

pageCount(17,13); //should print 2