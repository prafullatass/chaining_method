// Using one single line of JavaScript code, complete the following tasks on 
// the array of integers below.

// Then output (either in the DOM or the console) the sum of all the resulting numbers.

const $ = document.querySelector.bind(document)
const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// Sort the numbers in descending order (10, 9, 8, 7, etc).
const sortedArray = integers.sort((a,b) => a-b).reverse()
$("#no").innerHTML = "<h2> numbers in descending order </h2>"
$("#no").innerHTML += sortedArray
$("#no").innerHTML += `<br> Sum of Numbers : ${integers.reduce((a,b) => a+b)}`


// Remove any integers greater than 19.
const smallNum = integers.filter(num => num < 19)
$("#no").innerHTML += "<h2> integers smaller than 19 </h2>"
$("#no").innerHTML += smallNum
$("#no").innerHTML += `<br> Sum of Numbers : ${smallNum.reduce((a,b) => a+b)}`

// Multiply each remaining number by 1.5 and then subtract 1.
const newArray = integers.map((num, index) => integers.slice(index).reduce((a,b) => a+b))
$("#no").innerHTML += "<h2> remaining number by 1.5 and then subtract 1. </h2>"
$("#no").innerHTML += newArray
$("#no").innerHTML += `<br> Sum of Numbers : ${newArray.reduce((a,b) => a+b)}`







