'use strict';

var expect = require('chai').expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require('./index'), {});

    expect(widget.state.nameNull).to.equal(null);
    expect(widget.state.nameUndefined).to.equal(undefined);
};