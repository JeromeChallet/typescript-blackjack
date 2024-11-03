import Deck from "./deck";
import Card from "./card";
import promptSync from "prompt-sync";
const prompt = promptSync();
import { betPrompt, dealHand, hit, handValue, showHands } from "./utils";

let cardDeck = new Deck();
let deckPos: number = 0;
let pFund = 100;
let pBet = 0;
let pPot = 0;
let pHand: Hand;
let dHand: Hand;
let pHandValue: number = 0;
let dHandValue: number = 0;
let handResult: DealCards;
//console.log("cardDeck:", cardDeck);
const deck1: Card[] = cardDeck.deckCreation();
console.log("deck1:", deck1);
//deck1[deckPos];
//console.log("deckPos A:", deck1[deckPos]);

function app() {
  console.log(`Player's fund: ${pFund}$`);
  do {
    pBet = betPrompt(pFund);
    pFund -= pBet;
    pPot += pBet;
    console.log(`Player's fund: ${pFund}$`);
    console.log(`Player's bet: ${pPot}$`);
    /////////////////FIRST DEAL PLAYER////////////////
    handResult = dealHand(deck1, deckPos);
    pHand = handResult.hand;
    //pHandValue = handValue(pHand);
    deckPos = handResult.deckPos;
    /////////////////FIRST DEAL DEALER////////////////
    handResult = dealHand(deck1, deckPos);
    dHand = handResult.hand;
    //dHandValue = handValue(dHand);
    deckPos = handResult.deckPos;
    showHands(pHand, dHand);
    /////////////////ROUNDS////////////////
    while (true) {
      const pPrompt = prompt("hit or stand?: ");
      if (pPrompt === "hit") {
        handResult = hit(deck1, deckPos, pHand);
        pHand = handResult.hand;
        deckPos = handResult.deckPos;
        showHands(pHand, dHand, "hit");
      } else if (
        pPrompt === "stand" ||
        pHandValue === 21 ||
        dHandValue === 21
      ) {
        showHands(pHand, dHand, "stand");
        return;
      } else {
        console.log('please type "hit" or "stand" only');
      }
    }
  } while (pFund > -1);

  return;
}

app();
