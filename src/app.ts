import { shuffledDeck } from "./deck";
import { betPrompt } from "./utils";

const cardDeck = shuffledDeck;
let pFund = 100;
let pBet = 0;
let pPot = 0;
let deckPos = cardDeck[0];

//console.log("cardDeck:", cardDeck);

// function playerHand(deckPos) {
//   return (pHand = deckPos);
// }

function app() {
  console.log(`Player's fund: ${pFund}$`);
  do {
    pBet = betPrompt(pFund);
    pFund -= pBet;
    pPot += pBet;
    console.log(`Player's fund: ${pFund}$`);
    console.log(`Player's bet: ${pPot}$`);
    //console.log("Player's hand: ", pHand);
    //console.log("Dealer's hand: ", dHand);
  } while (pFund > -1);

  return;
}

app();
