var expect = require('chai').expect;

module.exports = function (helpers, done) {
    var widget = helpers.mount(require('./index'), {
        name: 'Frank',
        count: 30
    });

    var targetEl = widget.el;

    setTimeout(function () {
        widget.setState('count', 25);
        widget.update();
        expect(widget.state.count).to.equal(25);
        expect(targetEl.innerHTML).to.contain('Hello Frank! You have 25 new messages.');
    }, 25);

    setTimeout(function () {
        widget.setState('count', 50);
        widget.update();
        expect(widget.state.count).to.equal(50);
        expect(targetEl.innerHTML).to.contain('Hello Frank! You have 50 new messages.');
        done();
    }, 50);

    setTimeout(function () {
        widget.setState('count', 0);
        widget.update();
        expect(widget.state.count).to.equal(0);
        expect(targetEl.innerHTML).to.contain('Hello Frank! You have 0 new messages.');
    }, 0);
};