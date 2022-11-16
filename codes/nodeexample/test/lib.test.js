const {expect} = require('chai');
const {add,subtract} = require('../app/lib');
// AAA ==> Assemble Action Assert

// test suite
describe("testing lib module", () => {
    // test spec
    it("testing add", () => {
        let result = add(4,5);
        let expected = 9;
        expect(result).to.be.eq(expected);
    });
     // test spec
     it("testing subtract", () => {
        let result = subtract(10,4);
        let expected = 6;
        expect(result).to.be.eq(expected);
    });
});