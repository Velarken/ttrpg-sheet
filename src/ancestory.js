class Ancestory {
  constructor(lore,mainFeature,subFeature){
    this.lore = lore;
    this.mainFeature = mainFeature;
    this.subFeature = subFeature;
  }
}
class AncestoryFeature {
  constructor(name,desc,bonus=null,bonusFor=null) {
    this.name = name;
    this.desc = desc;
    this.bonus = bonus;
    this.bonusFor = bonusFor;
  }
}
export default function addPlayerAncestory(player) {
  let playerAncestory = new Ancestory(); // pass object or indiv calls
  player.ancestory = playerAncestory;
}
/*
**** TO DOS ****
  - create function to handle custom ancestories
  - finish addPLayerAncestory function
*/