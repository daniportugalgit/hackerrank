function gradingStudents(grades) {
  for (let i = 0; i < grades.length; i++) {
    if(grades[i] < 38 || grades[i] % 5 < 3)
      continue;

    grades[i] = Math.ceil(grades[i] / 5) * 5;
  }

  return grades;
}

let roundedGrades = gradingStudents([73, 67, 38, 33]); //should return [75, 67, 40, 33]
console.log(roundedGrades);


