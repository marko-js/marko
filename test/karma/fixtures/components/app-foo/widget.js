var expect = require('chai').expect;

function Widget(config) {
    expect(this.el).to.equal(this.getEl());
    expect(this.getEl('config').className).to.equal('config');

    // Make sure the generated element ID starts with the widget ID
    expect(this.getEl('config').id.substring(0, this.el.id.length)).to.equal(this.el.id);

    this.config = config;
    this.widgets.bar.appendHtml('FOO');

    var testEventFired = false;

    this.widgets.bar.on('testEvent', function(a, b) {
        expect(a).to.equal('a');
        expect(b).to.equal('b');
        testEventFired = true;
    });

    this.widgets.bar.emitTestEvent();

    expect(testEventFired).to.equal(true);

    window.testData['app-foo'] = this;
}

module.exports = Widget;