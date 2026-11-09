var assert = require("assert/strict");

module.exports = function (helpers) {
  var fields = [
    {
      value: "name",
      label: "Name",
    },
    {
      value: "age",
      label: "Age",
    },
  ];

  var component = helpers.mount(require.resolve("./index"), {
    fields: fields,
  });

  var inputs = component.getEl("root").querySelectorAll("input");
  var labels = component.getEl("root").querySelectorAll("label");

  assert.equal(inputs.length, fields.length);

  for (var i = 0; i < fields.length; i++) {
    var input = inputs[i];
    var label = labels[i];
    assert.equal(input.id, component.id + "-field_" + i);
    assert.equal(label.getAttribute("for"), input.id);
    assert.equal(input.value, fields[i].value);
    assert.equal(label.innerHTML, fields[i].label);
  }
};
