var expect = require('chai').expect;

module.exports = function(helpers) {
    var attributes = helpers.vdom.createAttributes(1)
        .a('id', 'link')
        .a('href', 'http://ebay.com');

    var el = helpers.vdom.createElement('div', 0, 2 /* childCount */)
        .e('span', 0, 1)
            .e('a', 0, 1)
                .as(attributes)
                .t('eBay')
        .e('footer', 0, 0);

    expect(el.firstChild.firstChild.id).to.equal('link');

    return el;
};