var expect = require('chai').expect;

module.exports = function(helpers) {
    var link = helpers.vdom.createElement('a', { 'href': 'http://ebay.com' }, 1 /* childCount */)
        .t('eBay');

    var el = helpers.vdom.createElement('div', { 'class': 'foo', 'onclick': 'doSomething()' }, 2 /* childCount */)
        .n(link)
        .e('span', null, 0);

    var linkClone = el.firstChild;


    expect(linkClone).to.not.equal(link);
    expect(link.$__parentNode).to.equal(undefined);
    expect(link.nextSibling).to.equal(undefined);

    expect(linkClone.nextSibling.nodeName).to.equal('span');
    expect(linkClone.$__parentNode.nodeName).to.equal('div');


    return el;
};