var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function concatGreeting(mentor1,mentor2,mentor3,mentor4,mentor5) {

    return  "Hello " + mentor1 +"\n"
           +"Hello " + mentor2 +"\n"
           +"Hello " + mentor3 +"\n"
           +"Hello " + mentor4 +"\n"
           +"Hello " + mentor5;
}

function createUppercase(mentor1,mentor2,mentor3,mentor4,mentor5) {

    return  concatGreeting(mentor1,mentor2,mentor3,mentor4,mentor5).toUpperCase();
    
}


console.log(createUppercase(mentor1,mentor2,mentor3,mentor4,mentor5));



