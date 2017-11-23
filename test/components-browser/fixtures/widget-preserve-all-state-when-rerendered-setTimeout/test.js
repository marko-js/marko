var expect = require('chai').expect;

module.exports = function (helpers, done) {
    var component = helpers.mount(require('./index'), {
        name: 'Frank',
        count: 30
    });

    var targetEl = component.el;

    setTimeout(function () {
        component.setState('count', 25);
        component.update();
        expect(component.state.count).to.equal(25);
        expect(targetEl.innerHTML).to.contain('Hello Frank! You have 25 new messages.');
    }, 25);

    setTimeout(function () {
        component.setState('count', 50);
        component.update();
        expect(component.state.count).to.equal(50);
        expect(targetEl.innerHTML).to.contain('Hello Frank! You have 50 new messages.');
        done();
    }, 50);

    setTimeout(function () {
        component.setState('count', 0);
        component.update();
        expect(component.state.count).to.equal(0);
        expect(targetEl.innerHTML).to.contain('Hello Frank! You have 0 new messages.');
    }, 0);
};