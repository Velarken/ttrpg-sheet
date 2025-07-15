class PlayableClass {
  constructor(hp,hope,stress,evasion,availableDomains,subclass) {
    this.hp = hp;
    this.hope = hope;
    this.stress = stress;
    this.evasion = evasion;
    this.availableDomains = availableDomains;
    this.classItems = [];
    this.hopeFeatures = [];
    this.classFeatures = []
    this.subclass = subclass // object with it's own subset of features
  }
  subclassChoice() {
    this.subclass = new PlayableSubClass();
  }
  addHopeFeature(feature) {
    this.hopeFeatures.push(feature)
  }
}
class PlayableSubClass {
  constructor(spellcastTrait,desc) {
    this.spellcastTrait = spellcastTrait;
    this.desc = desc;
    this.foundationFeatures = {};
    this.specializationFeatures = [];
    this.masteryFeatures = [];
  }
  addFoundationFeature(feature) {
    this.foundationFeatures.push(feature);
  }
  addSpecializationFeature(feature) {
    this.specializationFeatures.push(feature);
  }
  addMasteryFeature(feature) {
    this.masteryFeatures.push(feature)
  }
}

export default function createPlayableClass(player) {
  let newClass = new PlayableClass();
  player.class = newClass;
}