const { expect } = require("chai");

let findNoOfElements = (list) => {
  return list.length;
};

describe.only("find the number of element in the list", () => {
  context("when the list is empty", () => {
    it("it should return zero", () => {
      let result = findNoOfElements([]);
      expect(result).to.be.equal(0);
    });
  });

  context("when the list has one or more element", () => {
    it("it should return number of elements", () => {
      let result = findNoOfElements([1, 2, 3, 4, 5]);
      expect(result).to.be.equal(5);
    });
  });
});
