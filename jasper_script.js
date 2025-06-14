const jasper = {
    level:10,
    evasion:12,
    armor:5,
    hope:2,
    stress:0,
    traits: {finesse:2, agility:4, presence:0, strength:-1, instinct:3, knowledge:5},
    health: {hitPoints:10, majorThreshold:10, severeThreshold:10},
    experiences: {exp1:"", exp2:"", exp3:"", exp4:"", exp5:"",},
    weapons: {proficiency:5, mainHand:"", offHand:"",},
    domainEffects: {},
    classFeatures: {},
    equipment: {
        gold: {handfulls:0,bags:0},
        items: {
            // store item information in a separate variable, 
            // then store variable here.
        },
    },
    conditions: {
        vulnerable:false, restrained:false, hidden:false,
        tempCondition:false
    },
}
// store items and domain cards in individual objects, functions should work with
    // any given character to generate a character sheet

// use localStorage to store Hope, Stress, Armor, Hitpoints
    // store anything that may disappear session to session

// function to make card active / inactive on checkbox click
    // active cards added to array.
    // if array.length >= 5, alert("You have the maximum amount 
        // of domain cards selected. Please deselect a domain card first.")
    // display active cards

// dice roller uses the string display of the button, using JS to split the string
    // split string by spaces, array should look like [2,"d",8,"+",3]
    // array[0] - number of dice to roll
    // array[2] - number of faces for the die to roll
    // array[4] - bonus number added to the roll total

    // duality dice require specific tracking of each die for Hope / Fear mechs


// button dice roller, rolls dice based on string input of button pressed.    
function rollDice(diceInput) { // diceInput = content of dice button press
    let filter1 = diceInput.replace("d", " "); // remove 'd' from string
    let rollSpecifics = filter1.replace("+", " "); // remove '+' from string
    let rollArray = rollSpecifics.split(" "); // split string at spaces into array
    
    const amountOfDice = Number(rollArray[0]);
    const dieSize = Number(rollArray[1]);
    const rollBonus = Number(rollArray[2]);
    let rollTotal = 0;
    for (let i=0; i< amountOfDice ;i++) {
        let currentDie = Math.floor(Math.random()*dieSize +1);
        rollTotal += currentDie;
        console.log(currentDie, rollTotal)
    };
    rollTotal += rollBonus;
    console.log(`You rolled ${diceInput} and got a total of: ${rollTotal}`)
}

// duality dice roller, rolls 2 standard d12's and adds the bonus passed to function
function dualityDice(rollBonus) { 
    // diceInput = content of dice button press
    const hopeValue = Math.floor(Math.random()*12+1);
    const fearValue = Math.floor(Math.random()*12+1);
    const rollTotal = hopeValue + fearValue + rollBonus;
    console.log(`Hope: ${hopeValue}, Fear: ${fearValue}, Bonus: ${rollBonus} , Total: ${rollTotal}`)
    if (hopeValue > fearValue) {
        // rolled with Hope
        let result =  {rollAmount:rollTotal,rollType:"Hope"};   
        console.log(`You rolled a ${result.rollAmount} with ${result.rollType}`)     
    } else if (fearValue > hopeValue) {
        // rolled with Fear
        let result =  {rollAmount:rollTotal,rollType:"Fear"};
        console.log(`You rolled a ${result.rollAmount} with ${result.rollType}`)
    } else if (hopeValue === fearValue) {
        //critical success
        let result = {rollAmount:rollTotal,rollType:"Critical Success!"};
        console.log(`You rolled a ${result.rollAmount} with ${result.rollType}`)
    };
    
};

// delete after all functions pass tests
rollDice("3d10+4");
console.log(dualityDice(8));