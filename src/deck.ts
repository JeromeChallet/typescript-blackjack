import { shuffleArray, deckCreation } from "./utils";
import Card from "./card";

const Names: string[] = [
  "ace",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "jack",
  "queen",
  "king",
];
const Colors: string[] = ["black", "red"];
const Types: string[] = ["spade", "club", "diamond", "heart"];

let deck1: object[] = deckCreation<Card>(Names, Types, Colors, Card);
//console.log("deck1: ", deck1);
export const shuffledDeck = shuffleArray(deck1);
//console.log("Shuffled deck:", shuffledDeck);
