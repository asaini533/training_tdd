const { expect } = require("chai");

const flatten = (list) => {
  let result = [];

  if (list.length === 0) {
    return result;
  }

  let helper = (inp) => {
    inp.map((el) => {
      if (Array.isArray(el)) {
        helper(el);
      } else {
        result.push(el);
      }
    });
  };

  helper(list);

  return result;
};

describe.only("flatten a nested list structure", () => {
  context("when the list is empty", () => {
    it("it will return an empty list", () => {
      let result = flatten([]);
      expect(result.length).to.be.equal(0);
    });
  });

  context("when we pass a list with single element", () => {
    it("it will return the same list", () => {
      let result = flatten([5]);
      expect(result[0]).to.be.equal(5);
    });
  });

  context("when we pass a nested list", () => {
    it("it will return a flattern list", () => {
      let result = flatten([1, [2, [3, 4], 5]]);
      expect(result).to.be.eql([1, 2, 3, 4, 5]);
    });
  });
});
