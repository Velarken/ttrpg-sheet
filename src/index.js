import "./player.js"
import "./domains.js"
import "./communities.js"
import {wizard} from "./archetypes.js"
import {jasper} from "./player.js"
import {wildMagicCard} from "./domains.js"
import { Community } from "./communities.js"
import {highBorneDesc,loreBorneDesc,orderBorneDesc,ridgeBorneDesc,seaBorneDesc,slyBorneDesc,underBorneDesc,wanderBorneDesc,wildBorneDesc} from "./data.js"
import { createCard } from "./display.js"


const highborneCard = new Community("Highborne", highBorneDesc,highBorneBenefits);
createCard(highborneCard);
/* const loreborneCard = new Community("Loreborne", loreBorneDesc,loreBorneBenefits);
createCard(loreborneCard) */

// Community Exports
export const highborne = new Community("Highborne", highBorneDesc,highBorneBenefits);
export const loreborne = new Community("Loreborne", loreBorneDesc,loreBorneBenefits);
export const orderborne = new Community("Orderborne", orderBorneDesc,orderBorneBenefits);
export const ridgeborne = new Community('Ridgeborne', ridgeBorneDesc, ridgeBorneBenefits);
export const seaborne = new Community("Seaborne", seaBorneDesc, seaBorneBenefits);
export const slyborne = new Community("Slyborne", slyBorneDesc, slyBorneBenefits);
export const underborne = new Community("Underborne", underBorneDesc, underBorneBenefits);
export const wanderborne = new Community("Wanderborne", wanderBorneDesc, wanderBorneBenefits);
export const wildborne = new Community("Wildborne", wildBorneDesc, wildBorneBenefits);


// tests
jasper.domainEffects.push(wildMagicCard)
console.log("Jasper")
console.table(jasper)
console.log("Jasper's Domains")

console.table(jasper.domainEffects[0]) // table entire domain card's effects

console.log("available wizard domains")
console.log(wizard.domains)
console.table(wizard)