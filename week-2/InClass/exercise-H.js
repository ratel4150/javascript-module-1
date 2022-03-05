



function exponential(number) {
  return number * number;
}

  function isEven(number) {
    return number % 2 === 0;
  }


function forLoop(number){
  if (isEven(number) === true) {
    
    for (let number = 2; number < 11; number++) {
  let impar=2*number+1;
  console.log("The exponential of " + impar + " is " + exponential(impar));
  
  
}
    
} else {
  return "invalid"
    
}
  

}

console.log(forLoop(10))