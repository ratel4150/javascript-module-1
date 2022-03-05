function Courage(state){
    if (state === "Happy") {
        return "Good job, you're doing great!";
        
    } else if (state === "Sad") {
        return  "Every cloud has a silver lining";
        
    } else if(typeof state === 'number'){
        return "Beep beep boop" ;

    } else{
        return "I'm sorry, I'm still learning about feelings!"
    }
}

console.log(Courage(2));