var expect = require('chai').expect;

module.exports = function(helpers) {
    var link = helpers.vdom.createElement('a', { 'href': 'http://ebay.com' }, 1 /* childCount */)
        .t('eBay');

    var el = helpers.vdom.createElement('div', { 'class': 'foo', 'onclick': 'doSomething()' }, 2 /* childCount */)
        .n(link)
        .e('span', null, 0);

    var linkClone = el.firstChild;


    expect(linkClone).to.not.equal(link);
    expect(link.___parentNode).to.equal(null);
    expect(link.nextSibling).to.equal(null);

    expect(linkClone.nextSibling.___nodeName).to.equal('span');
    expect(linkClone.___parentNode.___nodeName).to.equal('div');


    return el;
};
