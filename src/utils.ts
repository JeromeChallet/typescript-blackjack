import promptSync from "prompt-sync";
const prompt = promptSync();

export function deckCreation<T>(
  name: string[],
  type: string[],
  color: string[],
  CardClass: new (...args: any[]) => T
): T[] {
  let deck1: T[] = [];

  for (let i = 0; i < type.length; i++) {
    for (let j = 0; j < color.length / 2; j++) {
      for (let k = 0; k < name.length; k++) {
        const card = new CardClass(
          name[k],
          type[i],
          name.indexOf(name[k]) + 1,
          type[i] === "spade" || type[i] === "club" ? color[0] : color[1]
        );
        deck1.push(card);
      }
    }
  }
  return deck1;
}

export function shuffleArray(myDeck: Card[]): Card[] {
  for (let i = myDeck.length - 1; i > 0; i--) {
    // Generate a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    // Swap elements at indices i and j
    [myDeck[i], myDeck[j]] = [myDeck[j], myDeck[i]];
  }
  return myDeck;
}

// export function betPrompt(pFund: number): number {
//   let pPrompt: number = 0;
//   do {
//     pPrompt = Number(prompt("Enter your bet: "));
//     if (pPrompt < 0 || pPrompt > pFund || isNaN(pPrompt)) {
//       console.log("please enter a valid amount");
//     }
//   } while (pPrompt < -1 || pPrompt > pFund || isNaN(pPrompt));
//   return pPrompt;
// }

export function betPrompt(pFund: number): number {
  while (true) {
    const pPrompt = Number(prompt("Enter your bet: "));
    if (pPrompt >= 0 && pPrompt <= pFund && !isNaN(pPrompt)) {
      return pPrompt; // Exit the loop once a valid input is entered
    }
    console.log("Please enter a valid amount");
  }
}

export function dealHand(deck1: Card[], deckPos: number): DealCards {
  let hand: Hand = [deck1[deckPos], deck1[deckPos + 1]];
  deckPos += 2;
  return { hand, deckPos };
}

export function hit(deck1: Card[], deckPos: number, curHand: Hand): DealCards {
  let hand: Hand = curHand;
  curHand.push(deck1[deckPos]);
  deckPos++;
  return { hand, deckPos };
}

export function handValue(curHand: Hand): number {
  let curHandValue: number = 0;
  for (const card of curHand) {
    curHandValue += card.value;
  }
  return curHandValue;
}

export function showHands(pHand: Hand, dHand: Hand, stand?: string): void {
  let pHandValue: number = 0;
  let dHandValue: number = 0;
  let showPlayerHand: string = "Player's hand: ";
  let showDealerHand: string = "Dealer's hand: ";

  for (const card of pHand) {
    pHandValue += card.value;
    showPlayerHand += card.name + card.type + " ";
  }
  showPlayerHand += `(Total: ${pHandValue})\n`;

  for (const card of dHand) {
    if (stand === "stand") {
      showDealerHand += card.name + card.type + " ";
      dHandValue += card.value;
    } else {
      showDealerHand = dHand[0].name + dHand[0].type + "[hidden]";
      dHandValue = dHand[0].value;
    }
  }
  showDealerHand += `(Total: ${dHandValue})`;

  return console.log(`${showPlayerHand}${showDealerHand}`);
}
