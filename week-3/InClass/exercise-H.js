let names = ["Daniel", "James", "Irina", "Mozafar", "Ashleigh"];

const resultado = names.find( function(name){
 return name 
} );

function validate(name,nameToCompare){
  if(name===nameToCompare){
    return "Found me!"
  }
  return "Haven't found me :("
  
  
}


console.log(validate(resultado,"mex")); 