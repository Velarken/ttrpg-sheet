import "./player.js"
import "./domains.js"
import "./communities.js"
import {wizard} from "./archetypes.js"
import {jasper} from "./player.js"
import {wildMagicCard} from "./domains.js"
import { Community,highBorneDesc,highBorneBenefits,loreBorneDesc,loreBorneBenefits } from "./communities.js"
import { createCard } from "./display.js"


const highborneCard = new Community("Highborne", highBorneDesc,highBorneBenefits);
createCard(highborneCard);
/* const loreborneCard = new Community("Loreborne", loreBorneDesc,loreBorneBenefits);
createCard(loreborneCard) */

// tests
jasper.domainEffects.push(wildMagicCard)
console.log("Jasper")
console.table(jasper)
console.log("Jasper's Domains")

console.table(jasper.domainEffects[0]) // table entire domain card's effects

console.log("available wizard domains")
console.log(wizard.domains)
console.table(wizard)