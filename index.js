/*
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}
*/

// a function, save(), which logs out the count when it's called(used for additional save named button to save the previous entries)

function save() {

    let savelogcount = count
    console.log(savelogcount)

}





// -------------------------------------------------------------------------------------

// using string datatype for numbers although numbers themselves are datatypes
//simple string usage
/*
let username = "Savleen"

console.log(username)
//Create a variable, message, that stores the string: "You have tree new notifications"

let not = "You have three new notification"
console.log(not)


//create a complete line too

console.log(message + ", " + username + "!")
*/
/*

//with a new var

let newvar = message + ", " + username + "!"
console.log(newvar)

//string vs number
let points = 4
let bonusPoints = "10"

let totalPoints = 4 + "10"

console.log(totalPoints)


*/

//--------------------------------------------------------------------------------

//funtion with record of previous entries

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    let newvar = count + " | "
    console.log(newvar)
    saveEl.innerText += newvar

    //for better spaces we can use
    //saveEl.textContent += countStr
}

//-----------------------------------------------------------------------------------------

//complete save, previous value added button

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " | "
    saveEl.textContent +=  countStr
    countEl.textContent = 0
    count = 0
}









































/*let countEl = document.getElementById("count-el")
console.log(countEl)

let count = 0

function increment() {
    //console.log("The button was clicked")
    count = count + 1
    countEl.innerText = count
    console.log(count)
}
*/


/*let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}
*/



 /*
 let lap1 = 34
let lap2 = 33
let lap3 = 36

// Create a function that logs out the sum of all the lap times
function logLapTime() {
    let totalTime = lap1 + lap2 + lap3
    console.log(totalTime)
}

logLapTime()
*/



/* DOM( Document Object Model)
Document : HTML Document
Object : HTML Document as Javascript object.
 Model : Implication of some real thing
     Real thing   <h2 id="count-el">0</h2>
/     Model let countEl = document.getElementById("count-el")
*/



//console.log(55)
