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
    domainEffects: [

    ],
    classFeatures: [
        { // Wizard Hope Feature
            cardName:"Not This Time",
            cardDesc: "<strong>Spend 3 Hope</strong> to force an adversary within Far range to reroll an attack or damage roll.",
            cardBttn: "<button class='hope-button'>3 Hope</button>",
            active:true,
        },
    ],
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
// Add class="damage-roll" to all weapon and spell attacks in html files
const damageButtons = document.querySelectorAll('.damage-roll');
const dualityButtons = document.querySelectorAll('.duality-roll');
const reactionButtons = document.querySelectorAll('.reaction-roll');
const damageRoll = document.querySelector('.damage-output');
const abilityRoll = document.querySelector('.ability-output');
const reactionRoll = document.querySelector('.reaction-output');

//  Event Listeners for all buttons, targetting the individual one pressed
for (button of damageButtons) {
    button.addEventListener('click', (clicked) => targetButton(clicked));
}
for (button of dualityButtons) {
    // get value of the button and pass variable to below function
    button.addEventListener('click', (clicked) => targetButton(clicked))
}
for (button of reactionButtons) {
    // button.addEventListener('click' (clicked) => )
}

// button dice roller, rolls dice based on string input of button pressed. 
function getRollInfo(diceInput) {
    console.log(`Input Value:  ${diceInput}`)
    // return array of CLEANED string
    if (diceInput.length == 2) {
        //duality dice, remove '+' or '-'
        let plusFilter=diceInput.replace('+','');
        let cleanedString=plusFilter.replace('-','');
        console.log(`Cleaned String Value:  {cleanedString}`)
        return dualityDice(cleanedString);
    } else  {
        console.log('you are here')
        let filter1 = diceInput.replace("d", " "); // remove 'd' from string
        let rollSpecifics = filter1.replace("+", " "); // remove '+' from string
        let rollArray = rollSpecifics.split(" "); // split string at spaces into array
        return rollDice(rollArray);
    }  
}

function rollDice(diceInput) { // diceInput = content of dice button press
    console.log(diceInput)
    const amountOfDice = Number(diceInput[0]);
    const dieSize = Number(diceInput[1]);
    const rollBonus = Number(diceInput[2]);
    let rollTotal = 0;
    for (let i=0; i<amountOfDice ;i++) {
        let currentDie = Math.floor(Math.random()*dieSize +1);
        rollTotal += currentDie;
        damageRoll.textContent = `You rolled: ${rollTotal}`;
    };
    rollTotal += rollBonus;
    console.log(rollTotal)
    console.log(`You rolled ${diceInput} and got a total of: ${Number(rollTotal)}`)
}

// duality dice roller, rolls 2 standard d12's and adds the bonus passed to function
function dualityDice(rollBonus) { 
    // diceInput = content of dice button press
    const hopeValue = Math.floor(Math.random()*12+1);
    const fearValue = Math.floor(Math.random()*12+1);
    const addedValue = Number(rollBonus);
    const rollTotal = hopeValue + fearValue + addedValue;
   
    if (hopeValue > fearValue) {
        // rolled with Hope
        let result =  {rollAmount:rollTotal,rollType:"Hope"};   
        abilityRoll.textContent = `You rolled a ${result.rollAmount} with ${result.rollType}`;  
    } else if (fearValue > hopeValue) {
        // rolled with Fear
        let result =  {rollAmount:rollTotal,rollType:"Fear"};
        abilityRoll.textContent = `You rolled a ${result.rollAmount} with ${result.rollType}`;
    } else if (hopeValue === fearValue) {
        //critical success
        let result = {rollAmount:rollTotal,rollType:"Critical Success!"};
        abilityRoll.textContent = `You rolled a ${result.rollAmount} with ${result.rollType}`;
    };
};

function targetButton(clicked) {
    console.log('clicked!')
    let clickedID= clicked.target.id;
    let targeted = document.getElementById(clickedID)
    console.log(targeted)
    getRollInfo(targeted.textContent)

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

// All dice results need to be updated to the dice output section.
    // ability rolls "Rolled:  x with Hope/Fear"
    // reaction rolls "Rolled:  x"
    // damage rolls "Total Damage: x"

// Add button to all damage rolls to "roll to hit" as well.

// Add toggle for advantage, disadvantage