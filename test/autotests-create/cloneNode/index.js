var expect = require('chai').expect;

module.exports = function(helpers) {
    var el = helpers.vdom.createElement('div', 2 /* attrCount */, 1 /* childCount */)
        .a('class', 'foo')
        .a('onclick', 'doSomething()')
        .e('svg', 2, 1)
            .a('width', '100')
            .a('height', '100')
            .e('circle', 7, 0)
                .a('cx', '50')
                .a('cy', '50')
                .a('r', '40')
                .a('stroke', 'green')
                .a('stroke-width', '4')
                .a('fill', 'yellow')
                .a('xlink:href', 'http://ebay.com/');

    var clone = el.cloneNode();
    expect(clone).to.not.equal(el);
    expect(clone.nodeName).to.equal('div');
    expect(clone.hasAttributeNS(null, 'class')).to.equal(true);
    expect(clone.firstChild).to.equal(el.firstChild);

    var root = helpers.vdom.createElement('div', 1 /* attrCount */, -1 /* childCount */)
        .a('class', 'root');

    root.appendChild(clone);

    expect(el.parentNode).to.equal(undefined);
    expect(clone.parentNode).to.equal(root);

    return root;
};