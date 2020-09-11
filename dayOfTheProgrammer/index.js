function dayOfProgrammer(year) {
  if(year > 1918) {
    if(year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) {
      //leap year
      return `12.09.${year}`;
    } else {
      //normal year
      return `13.09.${year}`;
    }
  } else if(year == 1918) {
    return '26.09.1918';
  } else {
    if(year % 4 == 0) {
      //leap year
      return `12.09.${year}`;
    } else {
      //normal year
      return `13.09.${year}`;
    }
  }

}

console.log(dayOfProgrammer(2017)); //should return 13.09.2017

console.log(dayOfProgrammer(2016)); //should return 12.09.2017 (its a leap year)

console.log(dayOfProgrammer(1800)); //should return 12.09.2017 (its a leap year)