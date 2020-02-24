var expect = require("chai").expect;
var pubsub = require("../../../__util__/pubsub");

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index"), {});

    window.received1 = [];
    window.received2 = [];

    component.getComponent("customEvents").emitTestEvent1();
    expect(window.received1.length).to.equal(1);
    expect(window.received1[0].args.length).to.equal(3); // ['a', 'b', sourceComponent]
    expect(window.received1[0].component).to.equal(
        component.getComponent("customEvents")
    );

    pubsub.channel("customEvents-" + component.id).emit("emitTestEvent2");

    expect(window.received1.length).to.equal(1);
    expect(window.received2.length).to.equal(1);

    expect(window.received2[0].args.length).to.equal(1); // [sourceComponent]
    expect(window.received2[0].component).to.be.an("object");
};
