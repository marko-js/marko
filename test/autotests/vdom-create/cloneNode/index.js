var expect = require('chai').expect;

module.exports = function(helpers) {
    var SVG_FLAGS = 1; // SVG

    var el = helpers.vdom.createElement('div', {
            'class': 'foo',
            'onclick': 'doSomething()'
        }, 1 /* childCount */)
        .e('svg', {
                width: '100',
                height: '100'
            }, 1, null, SVG_FLAGS)
            .e('circle', {
                'cx': '50',
                'cy': '50',
                'r': '40',
                'stroke': 'green',
                'stroke-width': '4',
                'fill': 'yellow',
                'xlink:href': 'http://ebay.com/'
            }, 0, null, SVG_FLAGS);

    var clone = el.$__cloneNode();
    expect(clone).to.not.equal(el);
    expect(clone.nodeName).to.equal('div');
    expect(clone.$__hasAttribute('class')).to.equal(true);
    expect(clone.firstChild).to.equal(el.firstChild);

    var root = helpers.vdom.createElement('div', { class: 'root' });

    root.$__appendChild(clone);

    expect(el.$__parentNode).to.equal(undefined);
    expect(clone.$__parentNode).to.equal(root);

    return root;
};
