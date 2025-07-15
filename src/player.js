class User {
  constructor() {
    this.characters = [];
  }
  addCharacter(name,level,playerClass,race) {
    const userCharacter = new Character(name,level,playerClass,race)
  }
}
class Character {
  constructor(name,level,race) {
    this.name = name;
    this.level = level;
    this.race = race;
    this.domainEffects = [];
    this.domainLoadout = [];
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
  addClass(chosenMainClass) {
    this.mainClass = chosenMainClass;
  }
  addSubClass(chosenSubClass) {
    this.subClass = chosenSubClass;
  }
  addDomainEffect(card) {
    this.domainEffects.push(card); // push individual domain card to personal array
  }
  addCardToLoadout(card) {
    this.domainLoadout.push(card)
  }
  removeCardFromLoadout(card) {
    let index = this.domainLoadout.indexOf(card);
    this.domainLoadout.splice(index,1)
  }
}
export const jasper = new Character('jasper',1,"half elf");
jasper.addClass("wizard object");
export const dillon = new User();
dillon.addCharacter(jasper);
jasper.addAgility();

// console testing
console.log("jasper")
console.table(jasper)
console.log("dillon")
console.table(dillon.characters[0]);

/*
  level2() {

  }
  level3() {

  }
  level4() {

  }
  level5() {

  }
  level6() {

  }
  level7() {

  }
  level8() {

  }
  level9() {

  }
  level10 () {

  }
  */