/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

var names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];

var longNameThatStartsWithA = findLongNameThatStartsWithA(names);

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"


function findLongNameThatStartsWithA(names){
  
  let nameFind=names.find(function (Name) {

    return Name.length > 7 && (Name.charAt(0)==="A") 
    
  })

  return nameFind

  

}

