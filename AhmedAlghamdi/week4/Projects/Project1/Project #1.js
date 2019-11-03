
/*
Unit Project #1: Some Coding Challenges
Overview

Write the javascript code for the following problems. You have two additional problems as bonus questions to get extra credit.

Q1. Write a function to check if an array contains a particular number.

Examples
check([1, 2, 3, 4, 5], 3) ➞ true
check([1, 1, 2, 1, 1], 3) ➞ false
check([5, 5, 5, 6], 5) ➞ true
check([], 5) ➞ false
*/
console.log('\nQ1. Write a function to check if an array contains a particular number.'); 
function Q1function(array,num){
    for (let key in array){
        if(num === array[key])
        //console.log(`find the number at ${key} index`)  :) just for test
        return true;
    }
        //console.log(`sorry, we don't have ${array[key]}`) :) just for test
        return false;
}
console.log(Q1function([1, 2, 3, 4, 5], 3)); //-> true
console.log(Q1function([1, 1, 2, 1, 1], 3)); //-> false
console.log(Q1function([5, 5, 5, 6], 5)); //-> true
console.log(Q1function([], 5)); //-> false
/*
Q2. Write a function that takes two integers (hours, minutes) and converts them to seconds.
Examples

convertToSeconds(1, 3) ➞ 3780
convertToSeconds(2, 0) ➞ 7200
convertToSeconds(0, 0) ➞ 0
*/
console.log('\n Q2. Write a function that takes two integers (hours, minutes) and converts them to seconds.'); 
function convertToSeconds(HH,MM){
    var seconds = (+HH) * 60 * 60 + (+MM) * 60; 
    console.log(seconds);
}
convertToSeconds(1,3);//➞ 3780
convertToSeconds(2,0);//➞ 7200
convertToSeconds(0,0);//➞ 0

/*
Q3. Use the following data to solve the problems below.
DEBUG Q3
*/
var  aquarium = {
    filledWithWater: true,
    capacityInGallons: 12,
    numberOfRocks: 5,
    fish: [
            {
                type: 'goldfish' ,
                size: '3.5 inches',
                color: 'golden'
            },
            {
                type: 'puffer', 
                size: '4 inches',
                color: 'tan'
            },
            {
                type: 'clown',
                size: '3 inches',
                color: 'orange'
            }
        ]
}
//1- access the value of the capacityInGallons key
console.log(`Q3...\n1- access the value of the capacityInGallons key\n capacityInGallons= ${aquarium.capacityInGallons}`);
//2- add 2 rocks to the numberOfRocks in the aquarium
console.log('Q3...\n2- add 2 rocks to the numberOfRocks in the aquarium');
aquarium.numberOfRocks+=2;
console.log(`\nnumber Of Rocks =  ${aquarium.numberOfRocks}`);

//3- access the clown fish and print the object.-----------------------------------
console.log('Q3...\n3- access the clown fish and print the object.');
let word='clown';
let Foundd=false;
for(let i=0; i<aquarium.fish.length ;i++ ){
        let Vfish =aquarium.fish[i];
        // console.log(Vfish.type);
        if(Vfish.type===word){
            console.log(`Found the word ${word} at ${i} index and object\ntype = ${Vfish.type}\nsize = ${Vfish.size}\ncolor = ${Vfish.color}`);
            Foundd=true; //;)
        }
}
if(Foundd==false)
console.log(`Sorry, not found ${word} in object`);
//  4- access the size of the puffer fish. ------------------------------------------
console.log('Q3...\n4- access the size of the puffer fish.');
let Nfish='puffer';
for(let i=0; i<aquarium.fish.length ;i++ ){
    let Vfish =aquarium.fish[i];
    // console.log(Vfish.type);
    if(Vfish.type===Nfish){
        console.log(`size = ${Vfish.size}\n`);
    }
}
//  5- your goldfish grew! Access the size key of goldfish and reassign it to '4 inches'.
console.log(`5- your goldfish grew! Access the size key of goldfish and reassign it to '4 inches'.`);
word='goldfish';
for(let i=0; i<aquarium.fish.length ;i++ ){
        let Vfish =aquarium.fish[i];
        // console.log(Vfish.type);
        if(Vfish.type===word){
            Vfish.size='4 inches';
            console.log(`new size = ${Vfish.size}\n`);
        }
}
//  6- you bought a new fish! Make a new object for a '5 inch' long, blue starfish and add it to the fish array.
console.log(`6- you bought a new fish! Make a new object for a '5 inch' long, blue starfish and add it to the fish array.`);
newfish={type:'blue starfish',
            size:'5 inches',
            color:'blue'}

aquarium.fish.push(newfish);
console.log(aquarium.fish);
// Q3-we can use function for_loop() to Found index and return index number..

/*
Q4. The following JSON object has been provided to you in data.js:

    This JSON object contains one key value pair, which holds an array of objects. This array of objects is the data we are after.

    What to do?

3.Create a main.js file and write the following functions

    Write a function that console.logs each character object in the data.

let logData = function() {
}

    Write a function that console.logs each character's name

let logNames = function() {
};

    Write a function that console.logs each character's name and eye color

let logNameEyes = function() {
};

    Write a function that console.logs each character's name whose mass is greater than 75

let logByMass = function() {
};

*/


/*
**Bonus Questions:

1. Write a function that takes in a parameter called num, and returns a random number between 0 and num. Look up documentation for Math.Random().

Examples

getRandomNum(6) ➞  returns a random number between 0 and 6
getRandomNumber(10) ➞ returns a random number between 0 and 10

2. A leap year has one day added to February for being synchronized with the seasonal year. A leap year appears with a regular frequency, which is determined by the rule below:

The year is exactly divisible by 400, or exactly divisible by 4 and not exactly divisible by 100. Given a year you must implement a function that returns true if it's a leap year, or false if it's not.

Examples
isLeap(2020) ➞ true // Exactly divided by 4 and not by 100.
isLeap(1800) ➞ false // Exactly divided by 4, but is also exactly divided by 100.
isLeap(2000) ➞ true // Exactly divided by 400.
isLeap(2019) ➞ false // It can't be exactly divided by 400 or by 4.

Notes

Exactly divided can be interpreted as the remainder of the division is equal to 0.
*/