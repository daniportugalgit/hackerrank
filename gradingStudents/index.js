function gradingStudents(grades) {
  let roundedGrades = [];

  grades.forEach(grade => {
    if(grade < 38 || grade % 5 < 3)
      roundedGrades.push(grade);
    else
      roundedGrades.push(Math.ceil(grade / 5) * 5);
  });

  return roundedGrades;

  //Or, even 'smaller', but much less readable:
  //return grades.map(grade => (grade < 38 || grade % 5 < 3) ? grade : Math.ceil(grade / 5) * 5);
}

let roundedGrades = gradingStudents([73, 67, 38, 33]); //should return [75, 67, 40, 33]
console.log(roundedGrades);


