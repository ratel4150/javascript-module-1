let birthYears= [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ]

function validateAgesDrive(array){
  console.log("Thank you for validate the data ")
  
  let strings=[]
  
  array.forEach(year => {
    
    age=2022-year
    missinYears=17-age
    if (age > 17) {
        return strings.push("Born in " +year+ " can drive")
        
    }
    return strings.push("Born in " +year+ " can drive in " +missinYears+ " years")

    
});
  
  
  return strings
}

console.log(validateAgesDrive(birthYears))