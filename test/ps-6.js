const { expect } = require("chai");

const checkPalindrome = (str) => {
  return str.split("").reverse().join("") === str;
};

describe.only("find if the string is palindrome or not", () => {
  context("when we pass an empty string", () => {
    it("it should return true", () => {
      let result = checkPalindrome("");
      expect(result).to.be.equal(true);
    });
  });

  context("when we pass a non palindrome string", () => {
    it("it should return false", () => {
      let result = checkPalindrome("abcde");
      expect(result).to.be.equal(false);
    });
  });

  context("when we pass a palindrome string", () => {
    it("it should return true", () => {
      let result = checkPalindrome("madamimadam");
      expect(result).to.be.equal(true);
    });
  });
});
