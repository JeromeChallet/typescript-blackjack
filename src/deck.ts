import { shuffleArray, deckCreation } from "./utils";
import Card from "./card";

export default class Deck {
  deckPos: number = 0;
  static Names: string[] = [
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
  static Colors: string[] = ["black", "red"];
  static Types: string[] = ["spade", "club", "diamond", "heart"];
  Deck: object[];
  constructor() {
    this.Deck = shuffleArray(
      deckCreation<Card>(Deck.Names, Deck.Types, Deck.Colors, Card)
    );
  }
}
