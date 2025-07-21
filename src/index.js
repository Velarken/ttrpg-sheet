import './styles.css'
import {wizard} from "./archetypes.js"
import {jasper} from "./player.js"
import {wildMagicCard} from "./domains.js"
import createCommunity from "./communities.js"
import {highBorneDesc,loreBorneDesc,orderBorneDesc,ridgeBorneDesc,seaBorneDesc,slyBorneDesc,underBorneDesc,wanderBorneDesc,wildBorneDesc} from "./data.js"
import {highBorneBenefits,loreBorneBenefits,orderBorneBenefits,ridgeBorneBenefits,seaBorneBenefits,slyBorneBenefits,underBorneBenefits,wanderBorneBenefits,wildBorneBenefits} from "./data.js"


// Communities Creation
const highborne = createCommunity("Highborne", highBorneDesc,highBorneBenefits);
const loreborne = createCommunity("Loreborne", loreBorneDesc,loreBorneBenefits);
const orderborne = createCommunity("Orderborne", orderBorneDesc,orderBorneBenefits);
const ridgeborne = createCommunity('Ridgeborne', ridgeBorneDesc, ridgeBorneBenefits);
const seaborne = createCommunity("Seaborne", seaBorneDesc, seaBorneBenefits);
const slyborne = createCommunity("Slyborne", slyBorneDesc, slyBorneBenefits);
const underborne = createCommunity("Underborne", underBorneDesc, underBorneBenefits);
const wanderborne = createCommunity("Wanderborne", wanderBorneDesc, wanderBorneBenefits);
const wildborne = createCommunity("Wildborne", wildBorneDesc, wildBorneBenefits);


// tests
jasper.domainEffects.push(wildMagicCard)
console.log("Jasper")
console.table(jasper)
console.log("Jasper's Domains")

console.table(jasper.domainEffects[0]) // table entire domain card's effects

console.log("available wizard domains")
// console.log(wizard.domains)
// console.table(wizard)