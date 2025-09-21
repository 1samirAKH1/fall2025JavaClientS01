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
let age = 20;
let isSuperhero = false;
let specialPowers = [];
let favoriteFood = "Pizza";

// Function to generate a random character description
let intro = ["Introducing.. ","Meet ","A big welcome to ","Hello to ","Woah! It's "]
let powers = [" and can fly faster than light"," and can shoot lasers out of their eyes"," and can control people with their mind"," and has incredible super strength"," and has super vision"," and could melt steel with their fingertips"]
let names = ["John","Sarah","Andrew","Kesha","Bob","Saul","William","Jesse","Walter"]
let foods = ["Pizza","Macaroni","Sushi","Popcorn","Chips","Rice","Noodles","Spaghetti","Chicken"]
let savedIntro;
let savedPower;

function generateDesc(useSaved){
    let returnString;
    //if not using saved things, regenerate everything randomly.
    if (useSaved == false){
        //superheroism
        if (Math.floor(Math.random()*2) == 1){
            isSuperhero = true
            //superpower
            savedPower = powers[Math.floor(Math.random()*powers.length)];
        }else{
            isSuperhero = false
        }

        //intro
        savedIntro = intro[Math.floor(Math.random()*intro.length)];

        //name
        characterName = names[Math.floor(Math.random()*names.length)];

        //age
        age = Math.floor(Math.random()*15)+18;

        //food
        favoriteFood = foods[Math.floor(Math.random()*foods.length)];
    }

    //generate the string
    returnString = savedIntro+characterName+", a "+age+" year-old";
    
    //if character is a superhero, add that
    if (isSuperhero){
        returnString += " superhero";
    }

    //favorite food
    returnString += " who loves "+favoriteFood;

    //if character is a superhero, add superpower2
    if (isSuperhero){
        if (useSaved == false){
        }
        returnString += savedPower;
    }
    returnString += "!";

    return returnString
}

// Function to update the character's description after changing age
function updateDesc(useSaved){
    document.getElementById("characterDescription").textContent = generateDesc(useSaved);
}
updateDesc(false);

// Add event listeners for buttons using querySelector
//age update
document.querySelector("#increaseAgeButton").addEventListener('click', function(){
    age += 1;
    updateDesc(true);
});
document.querySelector("#decreaseAgeButton").addEventListener('click', function(){
    age -= 1;
    updateDesc(true);
});

//generate
document.querySelector("#generateButton").addEventListener('click', function(){
    updateDesc(false);
});
