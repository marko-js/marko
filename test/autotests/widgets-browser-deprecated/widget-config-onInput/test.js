var expect = require('chai').expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require('./index.marko'), {
        name: 'Frank'
    });

    expect(widget.onMountCalled).to.eql(true);
};