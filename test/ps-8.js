const { expect } = require("chai");

const compressStr = (str) => {
  let result = "";

  if (str.length === 0) {
    return result;
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i + 1] && str[i] === str[i + 1]) {
      continue;
    }

    result += str[i];
  }

  return result;
};

describe.only("eliminate consecutive duplicates of list elements", () => {
  context("when we pass an empty string", () => {
    it("it will return an empty string", () => {
      let result = compressStr("");
      expect(result.length).to.be.equal(0);
    });
  });

  context("when we pass a single character string", () => {
    it("it will return the same string", () => {
      let result = compressStr("a");
      expect(result).to.be.equal("a");
    });
  });

  context(
    "when we pass a string with no consecutive dublicate character",
    () => {
      it("it will return the same string", () => {
        let result = compressStr("abc");
        expect(result).to.be.equal("abc");
      });
    }
  );

  context("when we pass a string with dublicate character", () => {
    it("it will return as string with no consecutive dublicate character", () => {
      let result = compressStr("aaaabccaadeeee");
      expect(result).to.be.equal("abcade");
    });
  });
});
