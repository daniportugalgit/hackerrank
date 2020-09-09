function timeConversion(s) {
  let period = s.slice(-2);
  let exploded = s.slice(0, -2).split(":");

  if(period == 'AM' && exploded[0] == '12') {
    exploded[0] = '00'; //edge case: 12AM
  } else if(period == 'PM') {
    exploded[0] = (exploded[0] % 12) + 12;
  }

  return exploded.join(":");
}

console.log('0:15:00AM =>', timeConversion('0:15:00AM'));
console.log('1:15:00AM =>', timeConversion('1:15:00AM'));
console.log('2:15:00AM =>', timeConversion('2:15:00AM'));
console.log('11:15:00AM =>', timeConversion('11:15:00AM'));
console.log('12:15:00AM =>', timeConversion('12:15:00AM'));
console.log('1:15:00PM =>', timeConversion('1:15:00PM'));
console.log('2:15:00PM =>', timeConversion('2:15:00PM'));
console.log('11:15:00PM =>', timeConversion('11:15:00PM'));
console.log('12:15:00PM =>', timeConversion('12:15:00PM'));