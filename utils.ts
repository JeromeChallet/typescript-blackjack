function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    // Swap elements at indices i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
// Example usage:
const myArray = [1, 2, 3, 4, 5];
console.log("Original array:", myArray);
const shuffledArray = shuffleArray(myArray);
console.log("Shuffled array:", shuffledArray);
