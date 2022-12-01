const add = require("./example/add.js");
const halvesAreAlike = require("./halvesAreAlike/halvesAreAlike.js");

describe("Example tests", function(){
  it("Should add small numbers", function(){
    expect(add(1,1)).toBe(2);
  });
});

describe("halvesAreAlike", function(){
  it("Given an even length number, it should return a boolean whether the first half and second half have the same number of vowels", function(){
    expect(halvesAreAlike("book")).toBe(true);
    expect(halvesAreAlike("textbook")).toBe(false);
    expect(halvesAreAlike("Uo")).toBe(true);
  });
});