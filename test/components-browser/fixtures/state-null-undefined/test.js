'use strict';

var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {});

    expect(component.state.nameNull).to.equal(null);
    expect(component.state.nameUndefined).to.equal(undefined);
};