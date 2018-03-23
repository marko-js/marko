var expect = require("chai").expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require.resolve("./index"), {
        version: 0
    });

    expect(window.rerenderInitOrder).to.deep.equal([
        "childB",
        "childA",
        "parent"
    ]);

    window.rerenderInitOrder = [];

    widget.setState("version", 1);
    widget.update();

    // console.log('ACTUAL ORDER: ', window.rerenderInitOrder);
    expect(window.rerenderInitOrder).to.deep.equal([
        "childB",
        "childA",
        "parent"
    ]);

    window.rerenderInitOrder = null;
};
