var expect = require('chai').expect;

module.exports = function(helpers) {
    var link = helpers.vdom.createElement('a', 1 /* attrCount */, 1 /* childCount */)
        .a('href', 'http://ebay.com')
        .t('eBay');

    var el = helpers.vdom.createElement('div', 2 /* attrCount */, 2 /* childCount */)
        .a('class', 'foo')
        .a('onclick', 'doSomething()')
        .n(link)
        .e('span', 0, 0);

    var linkClone = el.firstChild;


    expect(linkClone).to.not.equal(link);
    expect(link.parentNode).to.equal(undefined);
    expect(link.nextSibling).to.equal(undefined);

    expect(linkClone.nextSibling.nodeName).to.equal('span');
    expect(linkClone.parentNode.nodeName).to.equal('div');


    return el;
};