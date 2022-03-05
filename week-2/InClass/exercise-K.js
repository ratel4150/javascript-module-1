students =["Arturo","Ana","Yeray"]


function setStudents(array){
  
    let element =[]
    for (let i = 0; i < array.length; i++) {
        
         element.push(array[i]);
    }
    return element 
   
}

console.log(setStudents(students));