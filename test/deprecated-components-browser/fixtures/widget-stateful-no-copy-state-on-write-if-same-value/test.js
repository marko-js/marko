var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget = helpers.mount(require('./index'), {
        size: 'large',
        label: 'Initial Label'
    });

    var oldState = widget.state;
    widget.setState('size', 'large');
    expect(widget.state).to.equal(oldState);
    widget.update();
};