exports.check = function(taglibLookup, expect) {
    var lookup = taglibLookup.buildLookup(__dirname);
    // console.log(Object.keys(lookup.attributes));
    var attr = lookup.getAttribute('nested-foo', 'attr1');
    expect(attr != null).to.equal(true);
    expect(attr.type).to.equal('string');
};