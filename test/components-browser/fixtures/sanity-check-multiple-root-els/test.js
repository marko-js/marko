var expect = require("chai").expect;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index"), {
        name: "Frank",
        age: 30,
        url: "http://ebay.com/"
    });

    expect(component.getEl("name").innerHTML).to.equal("Frank");
    expect(component.getEl("age").innerHTML).to.equal("30");
    expect(component.getEl("link").href).to.equal("http://ebay.com/");

    component.setName("Jane");
    component.setAge(50);
    component.setUrl("http://ebay.com/search/");

    component.update();

    expect(component.getEl("name").innerHTML).to.equal("Jane");
    expect(component.getEl("age").innerHTML).to.equal("50");
    expect(component.getEl("link").href).to.equal("http://ebay.com/search/");
};
