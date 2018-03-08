var expect = require("chai").expect;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index"), {
        version: 0
    });

    expect(window.rerenderInitOrder).to.deep.equal([
        "childB",
        "childA",
        "parent"
    ]);

    window.rerenderInitOrder = [];

    component.input = { version: 1 };
    component.update();

    // console.log('ACTUAL ORDER: ', window.rerenderInitOrder);
    expect(window.rerenderInitOrder).to.deep.equal([
        "childB",
        "childA",
        "parent"
    ]);

    window.rerenderInitOrder = null;
};
