import { ICard } from "./types";
import promptSync from "prompt-sync";
const prompt = promptSync();

export function getDecision(): "hit" | "stand" {
  // returns whether the player will hit or stand
}

export function getHandValue(cards: ICard[]): number {
  // returns the numeric value of a hand
}

export function shuffleArray<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function getBet(balance: number): number {
  // returns the bet the player is making
}

export function getStrHand(hand: ICard[], hideSecondCard: boolean = false): string {
  // returns a string representation of the hand
}
