var expect = require('chai').expect;

module.exports = function (helpers) {
    var attributes = {
        id: 'link',
        href: 'http://ebay.com'
    };

    var el = helpers.vdom.createElement('div', null, null /* key */, null /* component */, 2 /* childCount */).e('span', null, null /* key */, null /* component */, 1).e('a', attributes, null /* key */, null /* component */, 1).t('eBay').e('footer', null, null /* key */, null /* component */, 0);

    expect(el.___firstChild.___firstChild.___attributes.id).to.equal('link');

    return el;
};