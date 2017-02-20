var expect = require('chai').expect;

module.exports = function(helpers) {
    var component = helpers.mount(require('./index'), {
        fields: [
            {
                value: 'name',
                label: 'Name'
            },
            {
                value: 'age',
                label: 'Age'
            }
        ]
    });

    var inputs = component.getEls('field');
    expect(inputs.length).to.equal(2);
    expect(inputs[0].value).to.equal('name');
};