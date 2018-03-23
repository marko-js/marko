var expect = require("chai").expect;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index"), {
        colors: ["red"]
    });

    // When hydrating, the first color item was rendered on the
    // server so there is no corresponding attach event fired
    var OFFSET = helpers.isHydrate ? -1 : 0;
    if (!helpers.isHydrate) {
        expect(component.events.length).to.equal(1);
        expect(component.events[0].color).to.equal("red");
        expect(component.events[0].node).to.equal(
            component.el.querySelectorAll("li")[0]
        );
    }

    component.input = {
        colors: ["red", "blue"]
    };

    component.update();

    expect(component.events.length).to.equal(OFFSET + 2);
    expect(component.events[OFFSET + 1].color).to.equal("blue");
    expect(component.events[OFFSET + 1].node).to.equal(
        component.el.querySelectorAll("li")[1]
    );

    component.input = {
        colors: ["red", "green", "blue"]
    };

    component.update();

    expect(component.events.length).to.equal(OFFSET + 3);
    expect(component.events[OFFSET + 2].color).to.equal("green");
    expect(component.events[OFFSET + 2].node).to.equal(
        component.el.querySelectorAll("li")[1]
    );
};
