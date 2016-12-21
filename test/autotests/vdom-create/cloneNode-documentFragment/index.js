var expect = require('chai').expect;

module.exports = function(helpers) {
    var svg = helpers.vdom.createElement('svg');

    var docFragment = helpers.vdom.createDocumentFragment();
    svg.$__appendChild(docFragment);

    expect(docFragment.namespaceURI).to.equal('http://www.w3.org/2000/svg');
    var docFragmentClone = docFragment.cloneNode();
    expect(docFragmentClone.namespaceURI).to.equal('http://www.w3.org/2000/svg');
    expect(docFragmentClone.nextSibling).to.equal(undefined);
    expect(docFragmentClone.parentNode).to.equal(undefined);

    return svg;
};