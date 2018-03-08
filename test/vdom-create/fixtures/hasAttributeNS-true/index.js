var expect = require("chai").expect;

module.exports = function(helpers) {
    var virtualEl = helpers.vdom.createElement("option", { selected: true });

    expect(virtualEl.___hasAttribute("selected")).to.equal(true);

    return virtualEl;
};
