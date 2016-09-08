var expect = require('chai').expect;

module.exports = function(helpers) {
    var attrCollection = helpers.vdom.createAttributes(5);

    expect(attrCollection.attributes.length).to.equal(5);

    attrCollection
        .a('class', 'foo')
        .a('data-foo', null)
        .a('data-bar', false)
        .a('data-baz', undefined)
        .a('id', 'bar');

    expect(attrCollection.attributes.length).to.equal(2);

    return helpers.vdom.createElement('div', 0 /* attrCount */, 2 /* childCount */)
        .e('span', 0, 1)
            .e('p', null, 0)
            .as(attrCollection)
        .e('a', 0, 0);
};