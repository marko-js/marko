var expect = require('chai').expect;

module.exports = function (helpers, done) {
    var component = helpers.mount(require('./index.marko'));
    var hello = require('./components/hello');

    var targetEl = component.getEl('target');
    hello.render({ name: 'John' }).then(function (result) {
        result.replace(targetEl);
        expect(component.el.firstChild.className).to.equal('hello');
        expect(component.el.firstChild.innerHTML).to.equal('Hello John');
        done();
    }).catch(function (err) {
        done(err);
    });
};