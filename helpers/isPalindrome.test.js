import { isPalindrome } from './isPalindrome.js';

describe('number is Palindrome', () => {
  it('some numbers are palindrome', () => {
    expect.assertions(4);

    expect(isPalindrome(1)).toStrictEqual(true);
    expect(isPalindrome(131)).toStrictEqual(true);
    expect(isPalindrome(1221)).toStrictEqual(true);
    expect(isPalindrome(123454321)).toStrictEqual(true);
  });
});
