type Card = {
  name: string;
  type: string;
  value: number;
  color: string;
};

type Hand = Card[];

interface DealCards {
  hand: Hand;
  deckPos: number;
}
