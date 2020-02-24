var expect = require("chai").expect;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index"), {});

    expect(helpers.targetEl.innerHTML).to.equal(
        '<div class="foo"></div><a href="ebay.com">eBay</a>'
    );

    component.forceUpdate();
    component.update();

    expect(helpers.targetEl.innerHTML).to.equal(
        '<div class="foo"></div><a href="ebay.com">eBay</a>'
    );
};
