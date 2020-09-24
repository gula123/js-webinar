const sylvesterSequence = require("../../series/sylvesterSequence");
const expect = require('chai').expect;

describe("In the Sylvester series", () => {
    it("the first number should be 2", () => {
        expect(lucasNumber(0)).to.equal(2);
    });
    it("the second number should be 1", () => {
        expect(lucasNumber(1)).to.equal(1);
    });

});