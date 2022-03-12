let birthYears= [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ]

function isValidateToDrive(year){
    return year < 2005
}

let letsDrive = birthYears.filter(isValidateToDrive)

console.log("These are the birth years of people who can drive: " + letsDrive)