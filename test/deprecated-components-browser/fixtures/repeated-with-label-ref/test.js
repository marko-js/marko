var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget = helpers.mount(require('./index'), {
        fields: [{
            value: 'name',
            label: 'Name'
        }, {
            value: 'age',
            label: 'Age'
        }]
    });

    var inputs = [];

    for (var i = 0; i < 2; i++) {
        inputs.push(widget.getEl('field[' + i + ']'));
    }

    expect(inputs.length).to.equal(2);
    expect(inputs[0].value).to.equal('name');
};