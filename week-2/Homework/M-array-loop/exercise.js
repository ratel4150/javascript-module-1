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

  
function getDaysStartsWithT(array){
  
    const days = []
    for (let i = 0; i < array.length; i++) {
         const day = array[i]
         if (day.startsWith("T")) {
           days.push(day)
           
         }
    }
    return days 
    
   
}

console.log(getDaysStartsWithT(daysOfWeek))



