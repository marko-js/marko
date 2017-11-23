var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {});
    var els = component.getEls('colorListItems');
    expect(els.length).to.equal(3);
    expect(els[0].innerHTML).to.equal('red');
    expect(els[1].innerHTML).to.equal('green');
    expect(els[2].innerHTML).to.equal('blue');
};