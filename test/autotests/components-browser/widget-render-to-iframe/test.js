var expect = require('chai').expect;

module.exports = function(helpers) {
    var component = helpers.mount(require('./index'), {});

    expect(component.$__document != null).to.equal(true);
    expect(component.$__document).to.equal(document);

    var contentComponent = component.renderIntoIframe();
    expect(contentComponent.$__document).to.equal(component.getFrameEl().contentWindow.document);
    expect(contentComponent.getEl('input').value).to.equal('test');

    expect(contentComponent.getComponent('more').getValue()).to.equal('hello');
};