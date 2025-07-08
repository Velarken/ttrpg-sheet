class Domain {
  constructor(name,availableTo) {
    this.name = name;
    this.availableTo = availableTo // list of subclasses each domain appears with
    this.domainCardsArray = [];
  }
  addToDomain(card) {
    return this.domainCardsArray.push(card);  // add new card to this.domain's array
  }
  checkAvailable() {
    // check if a given subclass is compatable with a given domain
  }
}
class DomainCard {
  constructor(name,type,swapCost) {
    this.name = name;  // card name
    this.type = type;  // which domain is it a part of
    this.swapCost = swapCost  // how much stress to change domain card
  }
  addEffect(title,description,cardName) {  // cardName is a domainEffect object
    return cardName[title] = description; // add key:value pair for class domainEffect object
  }
}
class domainEffect {
  constructor(name,desc,dmgType,spellcast,reaction,range) {
    this.name = name;
    this.desc = desc;
    this.dmgType = dmgType;
    this.spellcast = spellcast;
    this.reaction = reaction;
    this.range = range;
  }
}

/* console testing  */

//create domain
const codex = new Domain('codex');
//create domain card
export const wildMagicCard = new DomainCard("Codex of Wild Magic","codex",4) // instance of a domain card
// add card to domain
codex.addToDomain(wildMagicCard);  // push domain card into this.domain's array
// create domain effect
const fireballInfo = new domainEffect("Fireball","Create a large plume of fire","fire",18,16,"close");
// add domain effects to card
wildMagicCard.addEffect(fireballInfo.name, fireballInfo,wildMagicCard); // add effect to domain card
wildMagicCard.addEffect("Time Stop", "Slow time for everyone except you.", wildMagicCard) // add second effect to domain card

// logs
console.log("domain list");
console.table(codex);
console.table(codex.domainCardsArray[0])