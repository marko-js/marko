var expect = require('chai').expect;

module.exports = function(helpers) {
    var text = helpers.vdom.createText('Hello World');
    var textClone = text.___cloneNode();
    expect(textClone).to.not.equal(text);
    expect(text.___nodeValue).to.equal('Hello World');
    expect(textClone.___nodeValue).to.equal('Hello World');
    return text;
};
