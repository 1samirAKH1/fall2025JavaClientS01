/* 
Project: "Silly Character Customizer"
Objective:
You’ll create a small interactive webpage that generates a random, 
funny character with attributes like name, age, favorite food, and special powers. 
The user can also customize some aspects like updating the character's name or age.

Project Breakdown:
Declare, Initialize, and Update Variables:

You’ll create variables to store different character attributes 
(name, age, favorite food, etc.).
Users will have the option to update some of these variables, like 
changing the character’s name or age.

Use different data types for each attribute:
characterName (string)
Age (number)
Is the character a superhero? (boolean)
Special powers (array)
Favorite food (string)
Conduct Basic Math Operations:

You can randomly generate the character's age using math operations.
You could also include a small feature where the character's age increases 
or decreases when a button is clicked.
Create and Manipulate Strings:

Use string manipulation to generate a funny description of the character 
based on the data. You can concatenate strings or use template literals to 
display the character's attributes in a creative and humorous way.

*/

// Declare and initialize variables
let characterName = "John";
let age = Math.floor(Math.random()*15)+18;
let isSuperhero = false;
let specialPowers = [];
let favoriteFood = "Pizza";

// Function to generate a random character description
function generateDesc(){
    let intro = ["Introducing.. ","Meet ","A big welcome to "]
    let returnString;
    //add a random intro bit to returnstring, then characters name and age
    returnString = intro[Math.floor(Math.random()*intro.length)]+characterName+", a "+age+" year-old"
    if (isSuperhero){ //if character is a superhero, add that
        returnString += " superhero"
    }
    returnString += " who loves "+favoriteFood //favorite food
    if (isSuperhero){ //if character is a superhero, add superpower
        let intro = [" and can fly faster than light"," and can shoot lasers out of their eyes"," and can control people with their mind"," and has incredibly super strength"]
        returnString += ""
    }
    returnString += "!"
    return returnString
}

// Function to update the character's description after changing age
function updateDesc(){
    document.getElementById("characterDescription").textContent = generateDesc();
}
updateDesc();

// Add event listeners for buttons using querySelector
//age update
document.querySelector("#increaseAgeButton").addEventListener('click', function(){
    age += 1;
});
document.querySelector("#decreaseAgeButton").addEventListener('click', function(){
    age -= 1;
});

//generate
document.querySelector("#generateButton").addEventListener('click', function(){
    updateDesc();
});
