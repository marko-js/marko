var expect = require("chai").expect;
var getComponentForEl = require("marko/components").getComponentForEl;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index.marko"), {});
    var root = component.getEl("root");
    var childA = root.querySelector(".child-a");
    var childB = root.querySelector(".child-b");
    var childC = root.querySelector(".child-c");

    expect(getComponentForEl(childA)).has.property("name", "child-a");
    expect(getComponentForEl(childB)).has.property("name", "parent");
    expect(getComponentForEl(childC)).has.property("name", "child-c");
};
