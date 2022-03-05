/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/


const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

  let element =[]
function setArray(array){
  
  
    for (let i = 0; i < array.length; i++) {
        
         element.push(array[i]);
    }
    return element.sort(function(a,b) {
      
    return a.indexOf("W") - b.indexOf("M");
    
})
   
}





console.log(setArray(daysOfWeek))