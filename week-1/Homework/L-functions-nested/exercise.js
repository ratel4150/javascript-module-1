const mentor1 = "Daniel";
const mentor2 = "Irina";
const mentor3 = "Mimi";
const mentor4 = "Rob";
const mentor5 = "Yohannes";


function getMentoresUppercase(mentor){
    return mentor.toUpperCase();
}

function concatShoutyGreeting(mentor){
    return "HELLO " + getMentoresUppercase(mentor);
}


console.log(concatGreeting(mentor1));
console.log(concatGreeting(mentor2));
console.log(concatGreeting(mentor3));
console.log(concatGreeting(mentor4));
console.log(concatGreeting(mentor5));


