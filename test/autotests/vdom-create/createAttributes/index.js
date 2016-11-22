var expect = require('chai').expect;

module.exports = function(helpers) {
    var attributes = {
        id: 'link',
        href: 'http://ebay.com'
    };

    var el = helpers.vdom.createElement('div', null, 2 /* childCount */)
        .e('span', null, 1)
            .e('a', attributes, 1)
                .t('eBay')
        .e('footer', null, 0);

    expect(el.firstChild.firstChild.id).to.equal('link');

    return el;
};