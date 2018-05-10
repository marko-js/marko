var expect = require("chai").expect;

module.exports = function(helpers, done) {
    var component = helpers.mount(require.resolve("./index"));
    setTimeout(function() {
        expect(component.getEl("root").innerHTML).to.contain("Mounted: true");
        done();
    });
};
