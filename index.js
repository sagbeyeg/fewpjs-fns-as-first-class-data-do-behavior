/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(str) {
  const hour = parseInt(str.split(':'));
  console.log(hour);

  if (hour < 12) return "Good Morning"
  if (hour > 17) return "Good Evening"
  return "Good Afternoon"  
}

// console.log(greet("11:24"))
// console.log(greet("12:24"))
// console.log(greet("19:24"))

/* Write your implementation of displayMessage() */
function displayMessage(str) {
 document.getElementById("greeting").innerText = str 
}
// let hi = "Test"
// console.log(displayMessage(hi))

// console.log(document.getElementById("greeting").innerText)

