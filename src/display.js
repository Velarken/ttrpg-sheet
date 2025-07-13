//  imports
import {highborne} from "./communities.js";
import * as Players from "./player.js";
//  all DOM selectors
const pageContent = document.createElement('div'); // main div
pageContent.classList.add('main-content');
document.body.appendChild(pageContent);
//  DOM functions

export function createCard(community) {
  // create elements and ids
  let mainContainer = document.querySelector('.main-content')
  let card = document.createElement('div');
  card.classList.add('card');
  card.id = community.name;
  let cardTitle = document.createElement('div');
  cardTitle.classList.add('card-title');
  cardTitle.id = `${community.name}-title`;
  let cardDesc = document.createElement('div');
  cardDesc.classList.add('card-desc');
  cardDesc.id = `${community.name}-desc`;
  let cardBenefit = document.createElement('div');
  cardBenefit.classList.add('card-benefit');
  cardBenefit.id = `${community.name}-benefit`;
  // add elements to DOM
  mainContainer.appendChild(card);
  card.appendChild(cardTitle);
  card.appendChild(cardDesc);
  card.appendChild(cardBenefit);
  // send to render function
  renderToDOM(community);
}
function renderToDOM(community) {
  let cardTitle = document.querySelector('.card-title');
  let cardDesc = document.querySelector('.card-desc');
  let cardBenefit = document.querySelector('.card-benefit');
  cardTitle.innerHTML = community.name;
  cardDesc.innerHTML = community.description;
  cardBenefit.innerHTML = community.benefits;
}

class renderCommunityDom {
  constructor() {

  }
}

// to use imports from the above files
  // Communities.loreborne.loreBorneDesc <= like this


/* constructor(name,description,benefit) {
  this.name = name;
  this.description = description;
  this.benefit = benefit;
}
createElements() {
  // create elements and ids

  // add to DOM

}
renderToDOM() {

} */