const { expect } = require("chai");

const packDublicates = (list) => {
  let result = [];

  if (list.length === 0) {
    return result;
  }

  let i = 0;

  while (i < list.length) {
    if (list[i + 1] && list[i] === list[i + 1]) {
      let str = list[i];
      while (list[i + 1] && list[i] === list[i + 1]) {
        str += list[i + 1];
        i++;
      }
      result.push(str);
      i++;
      continue;
    }
    result.push(list[i]);
    i++;
  }

  return result;
};

describe.only("pack consecutive duplicates of list elements into sublists", () => {
  context("when we pas an empty list", () => {
    it("it will return an empty list", () => {
      let result = packDublicates([]);
      expect(result.length).to.be.equal(0);
    });
  });

  context("when we pass a list with single item", () => {
    it("it will return the same list", () => {
      let result = packDublicates(["a"]);
      expect(result).to.be.eql(["a"]);
    });
  });

  context("when we pass a list with no consecutive dublicates", () => {
    it("it will return the same list", () => {
      let result = packDublicates(["a", "b", "c"]);
      expect(result).to.be.eql(["a", "b", "c"]);
    });
  });

  context("when we pass a list with consecutive dublicates", () => {
    it("it will return list contains repeated elements they should be placed in separate sublists", () => {
      let result = packDublicates([
        "a",
        "a",
        "a",
        "a",
        "b",
        "c",
        "c",
        "a",
        "a",
        "d",
        "e",
        "e",
        "e",
        "e",
      ]);
      expect(result).to.be.eql(["aaaa", "b", "cc", "aa", "d", "eeee"]);
    });
  });
});
