"use strict";

/** Textual markov chain generator. */

class MarkovMachine {
  /** Build markov machine; read in text.*/

  constructor(text) {
    // A "word" will also include any punctuation around the word, so this will
    // include things like "The", "cat", "cat.".
    this.words = text.split(/[ \r\n]+/);
    this.chains = this.getChains();
  }

  /** Get markov chain: returns Map of Markov chains.
   *
   *  For text of "The cat in the hat.", chains will be:
   *
   *  {
   *   "The": ["cat"],
   *   "cat": ["in"],
   *   "in": ["the"],
   *   "the": ["hat."],
   *   "hat.": [null],
   *  }
   *
   * */

  getChains() {
    // initialize object
    const map = new Map();

    debugger;
    // for loop word in words
    for (let index = 0; index < this.words.length; index++) {
      const word = this.words[index];
      const nextWord = this.words[index + 1] || null;


      if (map.has(word)) {
        const wordList = map.get(word)
        wordList.push(nextWord)
        // set key as word.
        // set value as word index + 1
        // push word as key and null as word + 1
      } else {
        map.set(word, [nextWord])
      }
    }
    return map;
  }

  getIndex(keyword) {
    return Math.floor(
      Math.random() * this.chains.get(keyword).length);
  }

  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  getText() {
    let currWord = this.words[0];
    // - start at the first word in the input text
    let sentenceList = [currWord];

    while (currWord !== null) {
      // - find a random word from the following-words of that
      const randomIndex = this.getIndex(currWord);
      currWord = this.chains.get(currWord)[randomIndex]
      sentenceList.push(currWord);
    }

    return sentenceList.join(" ");
  }
}

const catInHatMachine = new MarkovMachine("the cat in the hat and the quick" +
  "brown fox jumps over the lazy dog");
console.log(catInHatMachine.chains);
console.log(catInHatMachine.getText())

module.exports = { MarkovMachine }
