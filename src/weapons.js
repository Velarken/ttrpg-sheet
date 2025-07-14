class Weapon {
  constructor(trait,range,damage,bonus) {
    this.trait = trait;
    this.range = range;
    this.damage = damage; // format of d6
    this.bonus = bonus;  //  format of +2
    this.features = [];
  }
  addFeature(name,desc) {
    let newFeature = new WeaponFeature(name,desc);
    this.features.push(newFeature);
  }
  adjustHopeCost(featureName,hopeCost) {
    featureName.hopeCost = hopeCost;
  }
  adjustStressCost(featureName, stressCost) {
    featureName.stressCost = stressCost;
  }
}
class WeaponFeature {
  constructor(name,desc) {
    this.name = name;
    this.desc = desc;
    this.hopeCost = 0;
    this.stressCost = 0;
  }
}

/*
**** Weapon Model ****
- trait
- range
- damage
- damage bonus
- multiple weapon abilities
  ** Ability Entails **
  - ability name
  - ability description
  - ability dmg
  - ability buff
  - hope cost
  - stress cost
*/