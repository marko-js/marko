exports.check = function (markoCompiler, expect) {
    var taglibLookup = markoCompiler.taglibLookup;
    var lookup = taglibLookup.buildLookup(__dirname);
    // console.log(Object.keys(lookup.attributes));
    var attr = lookup.getAttribute('test-dynamic-attribute', 'DYNAMIC');
    expect(attr != null).to.equal(true);
    expect(attr.type).to.equal('boolean');
    expect(attr.name).to.equal('*');

    attr = lookup.getAttribute('test-dynamic-attribute', 'foo');
    expect(attr != null).to.equal(true);
    expect(attr.type).to.equal('string');
};