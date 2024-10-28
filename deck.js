"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffledDeck = void 0;
const utils_1 = require("./utils");
const card_1 = __importDefault(require("./card"));
const Names = [
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
const Colors = ["black", "red"];
const Types = ["spade", "club", "diamond", "heart"];
let deck1 = (0, utils_1.deckCreation)(Names, Types, Colors, card_1.default);
console.log("deck1: ", deck1);
exports.shuffledDeck = (0, utils_1.shuffleArray)(deck1);
//console.log("Shuffled deck:", shuffledDeck);
