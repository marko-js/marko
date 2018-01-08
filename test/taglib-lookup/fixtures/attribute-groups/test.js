exports.check = function (markoCompiler, expect) {
    var taglibLookup = markoCompiler.taglibLookup;
    var lookup = taglibLookup.buildLookup(__dirname);

    expect(lookup.getAttribute('foo', 'cat').type).to.equal('boolean');
    expect(lookup.getAttribute('foo', 'age').type).to.equal('integer');
    expect(lookup.getAttribute('bar', 'dog').type).to.equal('boolean');
    expect(lookup.getAttribute('bar', 'age').type).to.equal('integer');
};