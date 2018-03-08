var expect = require("chai").expect;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index"), {
        name: "john"
    });

    expect(component.renderedHtml).to.equal(
        '<div class="hello"><div>john</div></div>'
    );
};
