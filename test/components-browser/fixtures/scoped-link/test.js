var expect = require("chai").expect;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index"), {});
    var link = component.getEl("root").querySelector("a");
    var linkHref = link.getAttribute("href");
    expect(!!linkHref).to.equal(true);
    expect(linkHref).to.match(/^#.*anchor$/);
    expect(link.getAttribute("href:scoped")).to.equal(null);
};
