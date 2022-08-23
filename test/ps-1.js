var chai = require("chai");
var expect = chai.expect;

//Find the last element of a list
const findLastElement = (list) => {
  return list[list.length - 1];
};

describe.only("find last element in a list", () => {
  context("when the list is empty", () => {
    it("should return nothing", () => {
      let result = findLastElement([]);
      expect(result).to.be.undefined;
    });
  });

  context("when list contains one element", () => {
    it("should return the first element", () => {
      let result = findLastElement([1]);
      expect(result).to.be.eql(1);
    });
  });

  context("when the list contains more than one element", () => {
    it("should return th last element", () => {
      let result = findLastElement([1, 2, 3]);
      expect(result).to.be.eql(3);
    });
  });
});
