import { shuffleArray, deckCreation } from "./utils";
import Card from "./card";

export default class Deck {
  //deckPos: number = 0;
  static Names: string[] = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  static Colors: string[] = ["black", "red"];
  static Types: string[] = ["♠", "♣", "♦️", "♥"];
  //Deck: object[];
  // constructor() {
  //   this.Deck = shuffleArray(
  //     deckCreation<Card>(Deck.Names, Deck.Types, Deck.Colors, Card)
  //   );
  // }
  deckCreation() {
    return shuffleArray(
      deckCreation<Card>(Deck.Names, Deck.Types, Deck.Colors, Card)
    );
  }
}
