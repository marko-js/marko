var expect = require("chai").expect;

module.exports = function(helpers, done) {
    var component = helpers.mount(require.resolve("./index"), {});
    var button = component.getEl("button");

    expect(component.clickCount).to.equal(undefined);
    button.click();

    setTimeout(() => {
        expect(component.clickCount).to.equal(1);
        button.click();

        setTimeout(() => {
            expect(component.clickCount).to.equal(2);
            done();
        }, 100);
    }, 100);
};
