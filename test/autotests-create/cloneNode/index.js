var expect = require('chai').expect;

module.exports = function(helpers) {
    var el = helpers.vdom.createElement('div', {
            'class': 'foo',
            'onclick': 'doSomething()'
        }, 1 /* childCount */)
        .e('svg', {
                width: '100',
                height: '100'
            }, 1)
            .e('circle', {
                'cx': '50',
                'cy': '50',
                'r': '40',
                'stroke': 'green',
                'stroke-width': '4',
                'fill': 'yellow',
                'xlink:href': 'http://ebay.com/'
            }, 0);

    var clone = el.cloneNode();
    expect(clone).to.not.equal(el);
    expect(clone.nodeName).to.equal('div');
    expect(clone.hasAttributeNS(null, 'class')).to.equal(true);
    expect(clone.firstChild).to.equal(el.firstChild);

    var root = helpers.vdom.createElement('div', { class: 'root' });

    root.appendChild(clone);

    expect(el.parentNode).to.equal(undefined);
    expect(clone.parentNode).to.equal(root);

    return root;
};