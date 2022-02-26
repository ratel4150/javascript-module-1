function getAge(age) {
    return "Si tu edad es: "+ age ;
  }
  
  function getAgeBorn(age) {
    let setAge = getAge(age);
    calculatingAgeOfBorn=2022-age;
    return "Entonces el año que naciste es: " + calculatingAgeOfBorn;
  }
  console.log(getAge(30));
  console.log(getAgeBorn(30));