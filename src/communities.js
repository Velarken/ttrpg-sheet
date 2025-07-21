let  communityList = [];
class Community {
  constructor(name,description,benefit) {
    this.name = name;
    this.description = description;
    this.benefits = benefit; // object that contains all modifiers if needed
  }

}
// data for DOM use for all current Community objects

export default function createCommunity(name,description,benefit) {
  let newCommunity = new Community(name,description,benefit);
  communityList.push(newCommunity);
}
export function assignCommunity(player,chosenCommunity) {
  player.community = chosenCommunity;
}