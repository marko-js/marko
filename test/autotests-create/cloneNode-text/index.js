var expect = require('chai').expect;

module.exports = function(helpers) {
    var text = helpers.vdom.createText('Hello World');
    var textClone = text.cloneNode();
    expect(textClone).to.not.equal(text);
    expect(text.nodeValue).to.equal('Hello World');
    expect(textClone.nodeValue).to.equal('Hello World');
    return text;
};