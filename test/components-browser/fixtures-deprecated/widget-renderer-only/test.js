var expect = require('chai').expect;

module.exports = function (helpers) {
    helpers.mount(require('./index'), {
        name: 'Frank'
    });
    var targetEl = helpers.targetEl;
    expect(targetEl.innerHTML).to.equal('Hello Frank!');
};