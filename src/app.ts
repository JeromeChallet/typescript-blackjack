import { shuffledDeck } from "./deck";
import promptSync from "prompt-sync";

let pFund = 100;
let pBet = 0;
let pPot = 0;

const cardDeck = shuffledDeck;
const prompt = promptSync();
//console.log("cardDeck:", cardDeck);

function betPrompt() {
  let pPrompt: number = 0;
  do {
    pPrompt = Number(prompt("Enter your bet: "));
    if (pPrompt < 0 || pPrompt > pFund) {
      console.log("please enter a valid amount");
    }
  } while (pPrompt < -1 || pPrompt > pFund);
  pFund -= pPrompt;
  pPot += pPrompt;
  return pPrompt;
}

function app() {
  console.log(`Player's fund: ${pFund}$`);
  do {
    pBet = betPrompt();
    console.log(`Player's fund: ${pFund}$`);
    console.log(`Player's bet: ${pPot}$`);
  } while (pFund > -1);

  return;
}

app();
