var expect = require('chai').expect;

module.exports = function (helpers, done) {
    var widget = helpers.mountLegacy({ component:require.resolve('./index') }, {
        name: 'Frank',
        count: 30
    });

    var targetEl = widget.el;

    setTimeout(function () {
        widget.setState('count', 100);
        widget.update();
        expect(widget.state.count).to.equal(100);
        expect(targetEl.innerHTML).to.contain('Hello Frank! You have 100 new messages.');
    }, 100);

    setTimeout(function () {
        widget.setState('count', 200);
        widget.update();
        expect(widget.state.count).to.equal(200);
        expect(targetEl.innerHTML).to.contain('Hello Frank! You have 200 new messages.');
        done();
    }, 200);

    setTimeout(function () {
        widget.setState('count', 0);
        widget.update();
        expect(widget.state.count).to.equal(0);
        expect(targetEl.innerHTML).to.contain('Hello Frank! You have 0 new messages.');
    }, 0);
};
