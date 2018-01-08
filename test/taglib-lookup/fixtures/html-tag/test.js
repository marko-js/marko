exports.check = function (markoCompiler, expect) {
    var taglibLookup = markoCompiler.taglibLookup;
    var lookup = taglibLookup.buildLookup(__dirname);

    expect(lookup.getTag('div').html).to.equal(true);
    expect(lookup.getAttribute('div', 'id').html).to.equal(true);
};