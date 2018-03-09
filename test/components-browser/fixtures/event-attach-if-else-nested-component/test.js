var expect = require("chai").expect;

module.exports = function(helpers) {
    var colors = ["blue", "green", "red"];
    var component = helpers.mount(require.resolve("./index"), {
        color: colors[0]
    });

    expect(component.events.length).to.equal(1);
    expect(component.events[0].color).to.equal("blue");
    expect(component.events[0].node).to.equal(
        component.el.querySelectorAll("li")[0]
    );

    component.input = { color: colors[1] };
    component.update();

    expect(component.events.length).to.equal(2);
    expect(component.events[1].color).to.equal(colors[1]);
    expect(component.events[1].node).to.equal(
        component.el.querySelectorAll("li")[0]
    );

    component.input = { color: colors[2] };
    component.update();

    expect(component.events.length).to.equal(3);
    expect(component.events[2].color).to.equal(colors[2]);
    expect(component.events[2].node).to.equal(
        component.el.querySelectorAll("li")[0]
    );

    component.input = { color: colors[0] };
    component.update();

    expect(component.events.length).to.equal(4);
    expect(component.events[3].color).to.equal(colors[0]);
    expect(component.events[3].node).to.equal(
        component.el.querySelectorAll("li")[0]
    );

    component.input = { color: colors[2] };
    component.update();

    expect(component.events.length).to.equal(5);
    expect(component.events[4].color).to.equal(colors[2]);
    expect(component.events[4].node).to.equal(
        component.el.querySelectorAll("li")[0]
    );
};
