const { expect } = require("chai");

const reverseAList = (list) => {
  return list.reverse();
};

describe.only("reverse a list", () => {
  context("when the list is empty", () => {
    it("list will be equal to the result list", () => {
      let result = reverseAList([]);
      expect(result).to.be.eql([]);
    });
  });

  context("when the list has only single item", () => {
    it("result will be equal to the input list", () => {
      let result = reverseAList([1]);
      expect(result[0]).to.be.equal(1);
    });
  });

  context("when list has more than one item", () => {
    it("it will return a reversed list", () => {
      let result = reverseAList([1, 2, 3]);
      expect(result[0]).to.be.equal(3);
    });
  });
});
