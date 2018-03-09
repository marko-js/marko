var expect = require("chai").expect;

module.exports = function(helpers) {
    var fields = [
        {
            value: "name",
            label: "Name"
        },
        {
            value: "age",
            label: "Age"
        }
    ];

    var component = helpers.mount(require.resolve("./index"), {
        fields: fields
    });

    var inputs = component.getEl("root").querySelectorAll("input");
    var labels = component.getEl("root").querySelectorAll("label");

    expect(inputs.length).to.equal(fields.length);

    for (var i = 0; i < fields.length; i++) {
        var input = inputs[i];
        var label = labels[i];
        expect(input.id).to.equal(component.id + "-field_" + i);
        expect(label.getAttribute("for")).to.equal(input.id);
        expect(input.value).to.equal(fields[i].value);
        expect(label.innerHTML).to.equal(fields[i].label);
    }
};
