// see https://github.com/marko-js/marko/issues/556
var expect = require('chai').expect;

module.exports = function(helpers, done) {
    var widget = helpers.mount(require('./index'), {});

    expect(widget.el.innerHTML).to.not.contain('FATAL ERROR');

    helpers.triggerEvent(widget.getEl(), 'submit');

    setTimeout(function() {
        expect(widget.el.innerHTML).to.contain('FATAL ERROR');
        done();
    }, 100);
};
