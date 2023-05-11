// Iteration 1: Names and Input

let hacker1 = "Nicolas"; // 7 DRIVER
let hacker2 = "Thor"; // 4 NAVIGATOR

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

let spaceDriver = "";


for (let i = 0; i < hacker1.length; i++) {

    spaceDriver += hacker1[i].toUpperCase();

    if (i === hacker1.length - 1) {
        break;
    }

    spaceDriver += ' '
}

console.log(spaceDriver);



let reversedNavigator = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
    reversedNavigator += hacker2[i];
}

console.log(reversedNavigator);



if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.");
}
else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first, definitely.");
}
else {
    console.log("What?! You both have the same name?");
}