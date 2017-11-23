exports.check = function (markoCompiler, expect) {
    var taglibLookup = markoCompiler.taglibLookup;
    var lookup = taglibLookup.buildLookup(__dirname);
    // console.log('LOOKUP: ', Object.keys(lookup.attributes));
    var attrDef = lookup.getAttribute('test-dynamic-attributes', 'global-attribute');
    expect(attrDef != null).to.equal(true);
    expect(attrDef.type).to.equal('boolean');
};