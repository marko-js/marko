var expect = require('chai').expect;

module.exports = function (helpers) {
    var SVG_FLAGS = 1; // SVG

    var el = helpers.vdom.createElement('div', {
        'class': 'foo',
        'onclick': 'doSomething()'
    }, null, null, 1 /* childCount */).e('svg', {
        width: '100',
        height: '100'
    }, null, null, 1, SVG_FLAGS, null).e('circle', {
        'cx': '50',
        'cy': '50',
        'r': '40',
        'stroke': 'green',
        'stroke-width': '4',
        'fill': 'yellow',
        'xlink:href': 'http://ebay.com/'
    }, null, null, 0, SVG_FLAGS, null);

    var clone = el.___cloneNode();
    expect(clone).to.not.equal(el);
    expect(clone.___nodeName).to.equal('div');
    expect(clone.___hasAttribute('class')).to.equal(true);
    expect(clone.firstChild).to.equal(el.firstChild);

    var root = helpers.vdom.createElement('div', { class: 'root' });

    root.___appendChild(clone);

    expect(el.___parentNode).to.equal(null);
    expect(clone.___parentNode).to.equal(root);

    return root;
};