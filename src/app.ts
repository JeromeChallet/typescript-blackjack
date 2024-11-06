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
const deck1: Card[] = cardDeck.deckCreation();
console.log("deck1:", deck1);

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
    deckPos = handResult.deckPos;
    /////////////////FIRST DEAL DEALER////////////////
    handResult = dealHand(deck1, deckPos);
    dHand = handResult.hand;
    deckPos = handResult.deckPos;
    /////////////////ROUNDS////////////////
    let playerTurn = true;

    while (playerTurn) {
      pHandValue = handValue(pHand);
      dHandValue = handValue(dHand);

      if (pHandValue < 21) {
        showHands(pHand, dHand, "hit");
      } else {
        break;
      }

      const pPrompt = prompt("hit or stand?: ");

      if (pPrompt === "hit") {
        handResult = hit(deck1, deckPos, pHand);
        pHand = handResult.hand;
        deckPos = handResult.deckPos;
      } else if (pPrompt === "stand") {
        playerTurn = false;
        while (dHandValue < 17 && dHandValue < pHandValue) {
          handResult = hit(deck1, deckPos, dHand);
          dHand = handResult.hand;
          deckPos = handResult.deckPos;
          dHandValue = handValue(dHand);
        }
      } else {
        console.log('please type "hit" or "stand" only');
      }
    }

    if ((pHandValue > dHandValue && pHandValue <= 21) || dHandValue > 21) {
      showHands(pHand, dHand, "stand");
      console.log("You win\n");
      pFund += pPot * 2;
    } else if (pHandValue === dHandValue) {
      showHands(pHand, dHand, "stand");
      pFund += pBet;
      console.log("Draw\n");
    } else {
      showHands(pHand, dHand, "stand");
      console.log("You lose\n");
    }
  } while (pFund > -1);
  console.log("game over");
  return;
}

app();
