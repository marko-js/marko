var expect = require("chai").expect;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index"));
    expect(component.getEl("root").firstChild.namespaceURI).to.equal(
        "http://www.w3.org/2000/svg"
    );
};
