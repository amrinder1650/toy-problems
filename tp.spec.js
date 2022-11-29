const add = require("./example/add.js");

describe("Example tests", function(){
  it("Should add small numbers", function(){
    expect(add(1,1)).toBe(2);
  });
});