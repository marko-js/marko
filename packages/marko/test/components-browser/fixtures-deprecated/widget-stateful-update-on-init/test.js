var expect = require("chai").expect;

module.exports = function(helpers, done) {
    var widget = helpers.mount(require.resolve("./index"));
    setTimeout(function() {
        expect(widget.el.innerHTML).to.contain("Mounted: true");
        done();
    });
};
