exports.check = function(taglibLookup, expect) {
    var lookup = taglibLookup.buildLookup(__dirname);
    var tag = lookup.getTag('test-hello');
    // console.log(Object.keys(lookup.tags));
    expect(tag != null).to.equal(true);
    expect(tag.name).to.equal('test-hello');
};