const { expect } = require("chai");

const countDublicates = (list) => {
  let result = [];

  if (list.length === 0) {
    return result;
  }

  let i = 0;

  while (i < list.length) {
    let counter = 1;
    if (list[i + 1] && list[i] === list[i + 1]) {
      while (list[i + 1] && list[i] === list[i + 1]) {
        counter++;
        i++;
      }
      result.push([counter, list[i]]);
      i++;
      continue;
    }
    result.push([1, list[i]]);
    i++;
  }

  return result;
};

describe.only("run length encoding of a list", () => {
  context("when we pass an empty list", () => {
    it("it will return an empty list", () => {
      let result = countDublicates("");
      expect(result).to.be.eql([]);
    });
  });

  context("when we pass a list with single item", () => {
    it("it will return the list with single count", () => {
      let result = countDublicates("a");
      expect(result).to.be.eql([[1, "a"]]);
    });
  });

  context("when we pass a list with no consecutive dublicates", () => {
    it("it will return the list with single count on every character", () => {
      let result = countDublicates("abc");
      expect(result).to.be.eql([
        [1, "a"],
        [1, "b"],
        [1, "c"],
      ]);
    });
  });

  context("when we pass a list with consecutive dublicate characheter", () => {
    it("it will return the list with actual count of every character", () => {
      let result = countDublicates("aaaabccaadeeee");
      expect(result).to.be.eql([
        [4, "a"],
        [1, "b"],
        [2, "c"],
        [2, "a"],
        [1, "d"],
        [4, "e"],
      ]);
    });
  });
});
