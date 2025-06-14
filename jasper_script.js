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