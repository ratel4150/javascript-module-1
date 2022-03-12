var students=["omar","Austine","Dany"]
var group=["austine",]



function isStudent(name) {
  return students.includes(name)
}
  var groupIsOnlyStudents=group.every(isStudent)
  
  if (groupIsOnlyStudents) {
    console.log("The group contains only students");
  } else {
    console.log("The group does not contain only students");
  }
  
  /* EXPECTED RESULT */
  
  // The group does not contain only students
  