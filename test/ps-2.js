const { expect } = require("chai");

const lastButOne = (list) => {
  return list[list.length - 2];
};

describe.only("find the last but one element in a list", () => {
  context("when the list is empty", () => {
    it("it should return nothing", () => {
      let result = lastButOne([]);
      expect(result).to.be.undefined;
    });
  });

  context("when list has single element", () => {
    it("it should return nothing", () => {
      let result = lastButOne([1]);
      expect(result).to.be.undefined;
    });
  });

  context("when list has more than one element", () => {
    it("it should return second last element from the list", () => {
      let result = lastButOne([1, 2, 3]);
      expect(result).to.be.equal(2);
    });
  });
});
