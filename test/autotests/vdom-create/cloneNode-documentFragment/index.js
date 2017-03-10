var expect = require('chai').expect;

module.exports = function(helpers) {
    var SVG_FLAGS = 1; // SVG

    var svg = helpers.vdom.createElement('svg', null /* attrs */, null /* child count */, SVG_FLAGS);

    var docFragment = helpers.vdom.createDocumentFragment();
    svg.$__appendChild(docFragment);

    expect(svg.$__namespaceURI).to.equal('http://www.w3.org/2000/svg');

    var docFragmentClone = docFragment.$__cloneNode();
    expect(docFragmentClone.nextSibling).to.equal(null);
    expect(docFragmentClone.parentNode == null).to.equal(true);

    return svg;
};
