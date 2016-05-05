exports.check = function(taglibLookup, expect) {
    var lookup = taglibLookup.buildLookup(__dirname);
    var tag = lookup.getTag('nested-foo');

    expect(tag != null).to.equal(true);
    expect(tag.name).to.equal('nested-foo');
};