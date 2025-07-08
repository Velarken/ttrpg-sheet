import "./player.js"
import "./domains.js"
import {jasper} from "./player.js"
import {wildMagicCard} from "./domains.js"

jasper.domainEffects.push(wildMagicCard)
console.log("Jasper")
console.table(jasper)
console.log("Jasper's Domains")

console.table(jasper.domainEffects[0]) // table entire domain card's effects