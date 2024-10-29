import Deck from "./deck";
import Card from "./card";
import { betPrompt } from "./utils";

let cardDeck = new Deck();
let deckPos: number = 0;
let pFund = 100;
let pBet = 0;
let pPot = 0;
let pHand: Hand;
let dHand: Hand;
//console.log("cardDeck:", cardDeck);
const deck1: object[] = cardDeck.deckCreation();
console.log("deck1:", deck1);
//deck1[deckPos];
console.log("deckPos A:", deck1[deckPos]);

function dealPlayerHand(): Hand {
  pHand = [deck1[deckPos], deck1[deckPos + 1]];
  deckPos = +2;
  //console.log("deckPos B:", deck1[deckPos]);
  return pHand;
}
function dealDealerHand(): Hand {
  dHand = [deck1[deckPos], deck1[deckPos + 1]];
  deckPos = +2;
  //console.log("deckPos C:", deck1[deckPos]);
  return dHand;
}

// function hit(curHand: object[]): Hand {
//   curHand.push(deck1[deckPos]);
//   deckPos++;
//   return curHand;
// }

function app() {
  console.log(`Player's fund: ${pFund}$`);
  do {
    pBet = betPrompt(pFund);
    pFund -= pBet;
    pPot += pBet;
    console.log(`Player's fund: ${pFund}$`);
    console.log(`Player's bet: ${pPot}$`);
    dealPlayerHand();
    console.log("Player's hand: ", pHand);
    dealDealerHand();
    console.log("Dealer's hand: ", dHand);
    //console.log("Dealer's hand: ", dHand);
  } while (pFund > -1);

  return;
}

app();
