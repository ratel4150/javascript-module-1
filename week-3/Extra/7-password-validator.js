/* 
Password Validation

Write a program that should check if each password in an array 
contains a valid password (see below for password criteria) and return a
new array with true or false booleans for whether that password was valid or not.

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")

Passwords must not be any previous password in the passwords array. 

Example 1:
PreviousPassword = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyY!5", "qwbfj76%", "tytT3729."];

Expected Result:
PasswordValidationResult=  [false, false, false, false, true]

*/

function validateLowerCase(string){
  return string.includes("a")||string.includes("b")||string.includes("c")||string.includes("d")||string.includes("e")||string.includes("f")||string.includes("g")||string.includes("h")||string.includes("i")||string.includes("j")
  ||string.includes("k")||string.includes("l")||string.includes("m")||string.includes("n")||string.includes("o")||string.includes("p")||string.includes("q")||string.includes("r")||string.includes("s")||string.includes("t")||
  string.includes("u")||string.includes("v")||string.includes("w")||string.includes("x")||string.includes("y")||string.includes("z")
}
function validateUpperCase(string){
  return string.includes("A")||string.includes("B")||string.includes("C")||string.includes("D")||string.includes("E")||string.includes("F")||string.includes("G")||string.includes("H")||string.includes("I")||string.includes("J")
  ||string.includes("K")||string.includes("L")||string.includes("M")||string.includes("N")||string.includes("O")||string.includes("P")||string.includes("Q")||string.includes("R")||string.includes("S")||string.includes("T")||
  string.includes("U")||string.includes("V")||string.includes("W")||string.includes("X")||string.includes("Y")||string.includes("Z")
}


function validateCharacter(string){
  
 return string.includes("!")||string.includes("#")||string.includes("$")||string.includes("%")||string.includes(".")||string.includes("*")||string.includes("&")
  
}

function validaterLength(string){
  return string.length >5
}

function validateNumber(string){
  return string.includes(1)||string.includes(2)||string.includes(3)||string.includes(4)||string.includes(5)||string.includes(6)||string.includes(7)||string.includes(8)||string.includes(9)||string.includes(0)
}



function validatePasswords(passwords) {


  let a=passwords.map(function(element){return validateCharacter(element)&&validaterLength(element)&&validateNumber(element)&&validateLowerCase(element)&&validateUpperCase(element)})
  console.log(a)
  
  return a

}

/* ======= TESTS - DO NOT MODIFY ===== */

const passwords1 = ["Se%5", "TktE.TJTU", "384#HsHF", "dvyyeyy!5", "tryT3729"]
const passwords2 = ["StUFf27%", "Pl3nty!", "Jai33", "shajsaUA**&&", "Pl3nty!"]

const util = require('util');

function test(test_name, actual, expected) {
    let status;
    if (util.isDeepStrictEqual(actual, expected)) {
        status = "PASSED";
    } else {
        status = `FAILED: expected: ${util.inspect(expected)} but your function returned: ${util.inspect(actual)}`;
    }

    console.log(`${test_name}: ${status}`);
}

test(
  "validatePasswords function works - case 1",
  validatePasswords(passwords1),
  [false, false, true, false, false]
 );

test(
  "validatePasswords function works - case 2",
  validatePasswords(passwords2),
  [true, true, false, false, false]
);


