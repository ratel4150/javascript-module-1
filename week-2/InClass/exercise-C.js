function numberChecker(num) {/* Function Declaration  */
  if (num > 20) {/* the variable must be greater than 20 */
    return `${num} is greater than 20`;/* return the variable and string */
  } else if (num === 20) {/* the variable must be equal than 29  */
    return `${num} is equal to 20`;
  } else if (num < 20) {/* the variable must be less than 20 */
    return `${num} is less than 20`;
  } else {
    return `${num} isn't even a number :(`;/* If no comparasion holds */
  }
}

console.log(numberChecker(10));