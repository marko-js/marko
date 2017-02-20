var expect = require('chai').expect;


module.exports = function(helpers) {
    var widget = helpers.mount(require('./index.marko'));

    var initialCounter = widget.getWidget('initialCounter');

    var counter = require('./components/app-counter');

    var renderTarget = widget.getEl('renderTarget');
    expect(renderTarget.innerHTML).to.contain('Count: 0');

    counter.renderSync({ value: 99 }).replaceChildrenOf(renderTarget);

    expect(renderTarget.innerHTML).to.not.contain('Count: 0');
    expect(renderTarget.innerHTML).to.contain('Count: 99');
    expect(initialCounter.isDestroyed()).to.equal(true);
};