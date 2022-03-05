function validUser(userName,userType){
    let userNameCapitalLetter =userName.charAt(0) === userName.charAt(0).toUpperCase();
    let  userNameLength = userName.length > 5 && userName.length < 10;
    let userTypeValid = (userType === "admin" || userType==="manage");
    if ( userName && userNameCapitalLetter && userTypeValid) {
        return "Username valid"
    } else {
        return "Username invalid"
        
    }
    
    
  
} 
/*  */
console.log(validUser("Arturo","admin"))