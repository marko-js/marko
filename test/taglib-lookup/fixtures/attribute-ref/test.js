exports.check = function (markoCompiler, expect) {
    var taglibLookup = markoCompiler.taglibLookup;
    var lookup = taglibLookup.buildLookup(__dirname);

    var sharedAttrDef = lookup.getAttribute('foo', 'hello');
    expect(sharedAttrDef.type).equal('shared');

    sharedAttrDef = lookup.getAttribute('bar', 'hello');
    expect(sharedAttrDef.type).equal('shared');
};