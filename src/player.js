class User {
  constructor(characters) {
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
    this.level += 1;
  }
}
export const jasper = new Character('jasper',1,"wizard","seraph","half elf")
console.table(jasper)



class Race {

}

// add new key:value pair to domain card object using feature name as key and feature desc and value
/* let myObject = {
  existingKey: 'existingValue'
};

let newKey = 'dynamicKey';
let newValue = 'dynamicValue';

myObject[newKey] = newValue; */