import Deck from "./deck";
import Card from "./card";
import promptSync from "prompt-sync";
const prompt = promptSync();
import { betPrompt, dealHand, hit, handValue, showHands } from "./utils";

let cardDeck = new Deck();
let deckPos: number = 0;
let pFund = 100;
let pBet: number | "end";
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
  do {
    pPot = 0;
    console.log(`Player's fund: ${pFund}$`);
    pBet = betPrompt(pFund);
    if (pBet === "end") {
      console.log("Game Over");
      break;
    }
    if (typeof pBet === "number") {
      pFund -= pBet;
      pPot += pBet;
    }
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
    /////////////////ROUNDS////////////////
    while (true) {
      pHandValue = handValue(pHand);
      dHandValue = handValue(dHand);

      if (pHandValue < 21) {
        showHands(pHand, dHand, "hit");
      } else {
        showHands(pHand, dHand, "stand");
        break;
      }

      const pPrompt = prompt("hit or stand?: ");

      if (pPrompt === "hit") {
        handResult = hit(deck1, deckPos, pHand);
        pHand = handResult.hand;
        deckPos = handResult.deckPos;
      } else if (pPrompt === "stand") {
        showHands(pHand, dHand, "stand");
        break;
      } else {
        console.log('please type "hit" or "stand" only');
      }
    }

    if (pHandValue > dHandValue && pHandValue < 22) {
      console.log("u win");
      pFund += pPot * 2;
    } else {
      console.log("u lose");
    }
  } while (pFund > -1);

  return;
}

app();
