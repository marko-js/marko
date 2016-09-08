var expect = require('chai').expect;

module.exports = function(helpers) {
    var attrCollection = helpers.vdom.createAttributes(2);

    expect(attrCollection.attributes.length).to.equal(2);

    attrCollection
        .a('class', 'foo')
        .a('id', 'bar');

    return helpers.vdom.createElement('div', 0 /* attrCount */, 2 /* childCount */)
        .e('span', 0, 1)
            .e('p', 1, 0)
            .as(attrCollection)
        .e('a', 0, 0);
};