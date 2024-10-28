"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deckCreation = deckCreation;
exports.shuffleArray = shuffleArray;
function deckCreation(name, type, color, CardClass) {
    let deck1 = [];
    for (let i = 0; i < type.length; i++) {
        for (let j = 0; j < color.length / 2; j++) {
            for (let k = 0; k < name.length; k++) {
                const card = new CardClass(name[k], type[i], name.indexOf(name[k]) + 1, type[i] === "spade" || type[i] === "club" ? color[0] : color[1]);
                deck1.push(card);
            }
        }
    }
    return deck1;
}
function shuffleArray(myDeck) {
    for (let i = myDeck.length - 1; i > 0; i--) {
        // Generate a random index from 0 to i
        const j = Math.floor(Math.random() * (i + 1));
        // Swap elements at indices i and j
        [myDeck[i], myDeck[j]] = [myDeck[j], myDeck[i]];
    }
    return myDeck;
}
