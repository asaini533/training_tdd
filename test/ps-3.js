const { expect } = require("chai");

const findkthElement = (list, k) => {
  return list[k - 1];
};

describe.only("find the kth element in the list", () => {
  context("when k is 0", () => {
    it("it should return nothing", () => {
      let result = findkthElement([1, 2, 3], 0);
      expect(result).to.be.undefined;
    });
  });

  context("when k is not in the list", () => {
    it("it should return nothing", () => {
      let result = findkthElement([1, 2, 3], 5);
      expect(result).to.be.undefined;
    });
  });

  context("when k is in the list", () => {
    it("it should return the kth element", () => {
      let result = findkthElement([1, 2, 3], 2);
      expect(result).to.be.equal(2);
    });
  });
});
