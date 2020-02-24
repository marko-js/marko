var expect = require("chai").expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require.resolve("./index"), {});

    expect(window.transitiveHandled).to.not.eql(true);

    var el = widget.el;
    var button = el.querySelector("button");

    button.click();

    expect(window.transitiveHandled).to.eql(true);
};
