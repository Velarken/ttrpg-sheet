import "./player.js"
export class Archetype {
  constructor(subclass,domains,startHP,startEvasion,identity,hopeFeature,archetypeFeatures) {
    this.subclass = subclass
    this.domains = Object.values(domains); // make array from object values
    this.startEvasion = startEvasion;
    this.startHP = startHP;
    this.identity = identity;
    this.hopeFeature = hopeFeature;
    this.archetypeFeatures = archetypeFeatures; // object containing all archetype features
  }
}
export class Wizard extends Archetype {
/*   constructor() {
    // add wizard features and subclass features
  } */
}
export const wizard = new Wizard("school of war",{domain:"codex", domain2:"splendor"},5,11,"jasper player object","hope feature object","archetype feature object")

console.log(wizard.domains);
console.table(wizard)
