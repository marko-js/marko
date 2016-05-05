exports.check = function(taglibLookup, expect) {
    var lookup = taglibLookup.buildLookup(__dirname);
    var ifTag = lookup.getTag('if');
    expect(ifTag != null).to.equal(true);
    expect(ifTag.name).to.equal('if');
};