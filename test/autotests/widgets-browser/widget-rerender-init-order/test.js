var expect = require('chai').expect;

module.exports = function(helpers) {
    window.rerenderInitOrder = [];

    var widget = helpers.mount(require('./index'), {
        version: 0
    });

    expect(window.rerenderInitOrder).to.deep.equal(['childA', 'childB', 'parent']);

    window.rerenderInitOrder = [];

    widget.setState('version', 1);
    widget.update();

    // console.log('ACTUAL ORDER: ', window.rerenderInitOrder);
    expect(window.rerenderInitOrder).to.deep.equal(['childA', 'childB', 'parent']);

    delete window.rerenderInitOrder;
};