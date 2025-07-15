import {wizard} from "./archetypes.js"
import {jasper} from "./player.js"
import {wildMagicCard} from "./domains.js"
import createCommunity from "./communities.js"
import {highBorneDesc,loreBorneDesc,orderBorneDesc,ridgeBorneDesc,seaBorneDesc,slyBorneDesc,underBorneDesc,wanderBorneDesc,wildBorneDesc} from "./data.js"


// Communities Creation
const highborne = new Community("Highborne", highBorneDesc,highBorneBenefits);
const loreborne = new Community("Loreborne", loreBorneDesc,loreBorneBenefits);
const orderborne = new Community("Orderborne", orderBorneDesc,orderBorneBenefits);
const ridgeborne = new Community('Ridgeborne', ridgeBorneDesc, ridgeBorneBenefits);
const seaborne = new Community("Seaborne", seaBorneDesc, seaBorneBenefits);
const slyborne = new Community("Slyborne", slyBorneDesc, slyBorneBenefits);
const underborne = new Community("Underborne", underBorneDesc, underBorneBenefits);
const wanderborne = new Community("Wanderborne", wanderBorneDesc, wanderBorneBenefits);
const wildborne = new Community("Wildborne", wildBorneDesc, wildBorneBenefits);


// tests
jasper.domainEffects.push(wildMagicCard)
console.log("Jasper")
console.table(jasper)
console.log("Jasper's Domains")

console.table(jasper.domainEffects[0]) // table entire domain card's effects

console.log("available wizard domains")
console.log(wizard.domains)
console.table(wizard)