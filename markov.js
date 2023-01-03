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
    // // TODO: implement this!
    // initialize object
    let map = {};

    // for loop word in words
    for (let index = 0; index < this.words.length; index++) {
      const word = this.words[index];

      // if word + 1 == undefined,
      if (this.words[index + 1] !== undefined) {
        // set key as word.
        // set value as word index + 1
        map[word] = [this.words[index + 1]];
        // push word as key and null as word + 1
      } else {
        map[word] = [null];
      }
    }
    return map;
  }

  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  getText() {
    // TODO: implement this!
    const firstWord = this.words[0]
    // - start at the first word in the input text
    let sentenceList = [firstWord];

    while ()
    // - find a random word from the following-words of that
      const randomIndexInRow = Math.floor(Math.random() * this.chains[firstWord].length);
      const randomWord = this.chains[firstWord][randomIndexInRow];
      sentenceList.push(randomWord)

    }

    // - repeat until reaching the terminal null
  }
}

const catInHatMachine = new MarkovMachine("the cat in the hat");
console.log(catInHatMachine.chains);
