class Community {
  constructor(name,description,benefit) {
    this.name = name;
    this.description = description;
    this.benefits = benefit; // object that contains all modifiers if needed
  }

}
// data for DOM use for all current Community objects

export default function createCommunity(player) {
  let newCommunity = new Community();
  player.community = newCommunity;
}