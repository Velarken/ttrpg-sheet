class Weapon {
  constructor(trait,range,damage,bonus,lore = null) {
    this.trait = trait;
    this.range = range;
    this.damage = damage; // format of d6
    this.bonus = bonus;  //  format of +2
    this.features = [];
    this.lore = lore;
  }
  addFeature(name,desc) { // init new object in features array
    let newFeature = new WeaponFeature(name,desc);
    this.features.push(newFeature);
  }

}
class WeaponFeature {
  constructor(name,desc,damage=null,buff=null) {
    this.name = name;
    this.desc = desc;
    this.hopeCost = 0;
    this.stressCost = 0;
    this.damage = damage;
    this.buff = buff;
  }
  adjustHopeCost(newHopeCost) { // increase or decrease player hope
    this.hopeCost = newHopeCost;
  }
  adjustStressCost(newStressCost) { // increase or decrease player stress
    this.stressCost = newStressCost;
  }
}

export default function createPlayerWeapon(player,) { // pass an array here or seperate inputs
  let newWeapon = new Weapon(); // pass an array here or seperate inputs
  player.equipmentArray.push(newWeapon);
}

/*
**** STILL TO DO ****
- finish createPlayerWeapon function
- imports and exports
*/


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