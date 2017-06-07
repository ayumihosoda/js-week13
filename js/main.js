// 3. Create an array of 5 strings, make some letters capital.

var baby = ["Clyde", "ELIO", "kanon", "emma", "AKI" ]

// 4.Loop through that array of strings, change each entry to lowercase, and add them to a new array.

var babyNames = []

for (i=0; i < baby.length; i++) {
	babyNames.push(baby[i].toLowerCase())
}

console.log(babyNames)

// 5. Loop through the new array and print the first and last character of each string to the console.

for (i=0; i < babyNames.length; i++) {
	console.log("First letter is " + babyNames[i].charAt(0) + " and last letter is " + babyNames[i].charAt(babyNames[i].length - 1))
}

// 6. Create an variable storing your name. Using the split method and a loop console each letter.

var name = "Ayumi"
var nameArray = name.split("")

for (i=0; i < nameArray.length; i++) {
	console.log(nameArray[i])
}

// 7. Join your name string back together and replace all occurrences of one letter with another. ex. replace y to a.

var nameArray = nameArray.join("")
console.log(nameArray.replace("y","a"))

// 9. Create a function that will get the user input, test it against the standard email regex, and print the result in the console.

function validateEmail() {
	var email = document.getElementById("email").value
	var regEx = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,5}$/
	console.log(regEx.test(email))
}

// 10. Add the function to the button using addEventListener.

document.getElementById("button").addEventListener("click", validateEmail, false)

