// import chai, declare expect variable
const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `adder` function
describe('fizzBuzzer', function() {

  // test the normal case
  it('should return fizz, buzz, or fizz-buzz', function() {
    const normalCases = [
      {a: 15, expected: 'fizz-buzz'},
      {a: 20, expected: 'buzz'},
      {a: 12, expected: 'fizz'}
    ];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      ['a', 1],
      ['1', 2],
      [2, false]
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        adder(input[0], input[1]);
      }).to.throw(Error);
    });
  });
});


// module.exports = function(num) {
//     if (typeof num !== 'number') {
//         throw Error('`num` must be a number');
//     }
//     if (num % 15 === 0) {
//         return 'fizz-buzz';
//     }
//     if (num % 5 === 0) {
//         return 'buzz';
//     }
//     if (num % 3 === 0) {
//         return 'fizz';
//     }
//     else {
//         return num;
//     }
// }