exports.check = function(markoCompiler, expect) {
    var taglibLookup = markoCompiler.taglibLookup;
    var lookup = taglibLookup.buildLookup(__dirname);

    var idAttrDef = lookup.getAttribute('div', 'class');
    expect(idAttrDef.type).to.equal('cssStyle');
};