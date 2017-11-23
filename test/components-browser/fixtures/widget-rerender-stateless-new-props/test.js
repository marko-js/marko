var expect = require('chai').expect;

module.exports = function (helpers) {
    var targetEl = helpers.targetEl;

    var component = helpers.mount(require('./index'), {
        name: 'Frank',
        messageCount: 10
    });

    expect(targetEl.innerHTML).to.contain('Hello Frank! You have 10 new messages.');

    component.input = {
        name: 'John',
        messageCount: 20
    };

    component.update();

    expect(targetEl.innerHTML).to.contain('Hello John! You have 20 new messages.');

    component.input = {
        name: 'Jane',
        messageCount: 30
    };

    expect(targetEl.innerHTML).to.contain('Hello John! You have 20 new messages.');

    component.update();

    expect(targetEl.innerHTML).to.contain('Hello Jane! You have 30 new messages.');
};