/* join acomoda y convierte en string */


classES=["Arturo","Yeray","Laura"]
classEN=["John","Bob","Jenny"]
migraCode=classES.concat(classEN)

function studentValidate(array, student) {
 
  
    if (array.includes(student) == true) {
       
      let students;
      let element;
      for (let index = 0; index <= array.indexOf(student); index++) {
           element = index;
          
           /* console.log(element); */
      }
     
      students = array.slice(element + 1,array.length).concat(array.slice(0,element));
    
    
  
      return student + " is at the migraCode course with " + students.sort().join("|");
    }
    let students = array.sort().join("|");
    return student + " is not at the migraCode course with " + students;
  }
  
  console.log("these students are from the classES");
  console.log(classES);
  console.log("these students are from the classEN");
  console.log(classEN);
  console.log("these students are from the migraCode course");
  console.log(migraCode);
  console.log("Is Bob a student in migraCode course?");
  console.log(studentValidate(migraCode, "Bob"));

  /* console.log("Is Jose a student in migraCode course?");
  console.log(studentValidate(migraCode, "Jose")); */
  /* console.log(migraCode.indexOf("Bob")); */