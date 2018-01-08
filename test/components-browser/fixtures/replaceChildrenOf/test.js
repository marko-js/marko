var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index.marko'));

    var initialCounter = component.getComponent('initialCounter');

    var counter = require('./components/app-counter');

    var renderTarget = component.getEl('renderTarget');
    expect(renderTarget.innerHTML).to.contain('Count: 0');

    counter.renderSync({ value: 99 }).replaceChildrenOf(renderTarget);

    expect(renderTarget.innerHTML).to.not.contain('Count: 0');
    expect(renderTarget.innerHTML).to.contain('Count: 99');
    expect(initialCounter.isDestroyed()).to.equal(true);
};