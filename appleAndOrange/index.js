function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let applesInside = 0;
  let orangesInside = 0;

  apples.forEach(apple => {
    if(a + apple >= s && a + apple <= t)
      applesInside++;
  });

  oranges.forEach(orange => {
    if(b + orange >= s && b + orange <= t)
      orangesInside++;
  });

  console.log(applesInside);
  console.log(orangesInside);

  //onliner, but not so readable:
  //let applesInside = apples.filter(apple => apple + a >= s && apple + a <= t).length;
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]); //Should print 1 1