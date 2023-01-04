const { MarkovMachine } = require("./markov")
//break up tests to 2 describes
describe("Markov tests", function() {
  let testSentence;
  let testMachine;

  beforeAll(function() {
    testSentence = "The quick brown fox jumped"
    testMachine = new MarkovMachine(testSentence)
  })

  // chains
  test("Returns map of words", function () {
    const map = testMachine.chains;
    expect(map.size).toEqual(5);

    console.log(map);
    const theKey = map.get('The');
    expect(theKey).toEqual(['quick']);

    const jumpedKey = map.get('jumped');
    expect(jumpedKey).toEqual([null]);

    expect(map).toEqual(new Map ([
      ['The', [ 'quick' ]],
      ['quick', [ 'brown' ]],
      ['brown', [ 'fox' ]],
      ['fox', [ 'jumped' ]],
      ['jumped', [ null ]]
    ]))
  })


  // get text
  test("Returns randomized text from chains", function () {
    const text = testMachine.getText();
    expect(text).toEqual("The quick brown fox jumped");
  })
})
