'use strict';

var expect = require('chai').expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require('./index'), {});

    expect(function() {
        widget.state.foo = 'bar';
    }).to.throw(TypeError);
};