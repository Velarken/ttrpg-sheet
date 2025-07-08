.class User {
  constructor() {
    this.characters = [];
  }
  addCharacter(name,level,playerClass,race) {
    const userCharacter = new Character(name,level,playerClass,race)
  }
}
class Character {
  constructor(name,level,mainClass,subClass,race) {
    this.name = name;
    this.level = level;
    this.mainClass = mainClass;
    this.subClass = subClass
    this.race = race;
    this.domainEffects = [];
    this.traits =
    {
      agility:0,
      finesse:0,
      instinct:0,
      knowledge:0,
      presence:0,
      strength:0
    }
  }
  updateLevel() {
    this.traits.level += 1;
  }
  addAgility() {
    this.traits.agility += 1;
  }
  addFinesse() {
    this.traits.finesse += 1;
  }
  addInstinct() {
    this.traits.instinct += 1;
  }
  addKnowledge() {
    this.traits.knowledge += 1;
  }
  addPresence() {
    this.traits.presence += 1;
  }
  addStrength() {
    this.traits.strength += 1;
  }
}
export const jasper = new Character('jasper',1,"wizard","seraph","half elf");
const dillon = new User();
dillon.addCharacter(jasper);
jasper.addAgility();
console.log("jasper")
console.table(jasper)
console.log("dillon")
console.table(dillon.characters[0]);



class Race {

}

// add new key:value pair to domain card object using feature name as key and feature desc and value
/* let myObject = {
  existingKey: 'existingValue'
};

let newKey = 'dynamicKey';
let newValue = 'dynamicValue';

myObject[newKey] = newValue; */