

  function magician(yourFunc) {
    console.log(
      "I am magician! Watch as I mutate an array of strings to your heart's content!"
    );
    const namesArray = [
      "James",
      "Elamin",
      "Ismael",
      "Sanyia",
      "Chris",
      "Antigoni",
    ];
  
    const magicOutput = yourFunc(namesArray);
  
    return magicOutput;
  }
  
  let x = function (z) {
    let arrayNewWithUpperCase = [];
    for (let index = 0; index < z.length; index++) {
      const element = z[index];
  
      arrayNewWithUpperCase.push(element.toUpperCase());
    }
    return arrayNewWithUpperCase.sort();
  };
  
  console.log(magician(x));
  