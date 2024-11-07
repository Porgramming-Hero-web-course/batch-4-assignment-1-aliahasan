function countWordOccurrences(sentence: string, word: string): number {
  const splitSentence = sentence.split(" ");
  let count = 0;
  for (const wordInSentence of splitSentence) {
    if (wordInSentence.toLowerCase() === word.toLowerCase()) {
      count = count + 1;
    }
  }
  return count;
}

const mySentence = "I love typescript";
const output3 = countWordOccurrences(mySentence, "typescript");
