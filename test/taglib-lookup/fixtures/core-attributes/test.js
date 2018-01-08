exports.check = function (markoCompiler, expect) {
    var taglibLookup = markoCompiler.taglibLookup;
    var lookup = taglibLookup.buildLookup(__dirname);
    // console.log('LOOKUP: ', Object.keys(lookup.attributes));
    var ifAttr = lookup.getAttribute('div', 'if');
    expect(ifAttr != null).to.equal(true);
    expect(ifAttr.type).to.equal('statement');
};