var expect = require("chai").expect;

it("should initialize components correctly across async boundaries", function (done) {
  for (let i = 0; i <= 4; i++) {
    expect(window.component.getEl(`div${i}`)).to.not.equal(undefined);
    expect(window.component.getComponent(`child${i}`)).to.not.equal(undefined);
  }
  done();
});
