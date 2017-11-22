exports.check = function (marko, markoCompiler, expect, helpers, done) {
    var UniqueVars = require('marko/src/compiler/util/UniqueVars');

    var uniqueVars = new UniqueVars();
    var var1 = uniqueVars.addVar('foo', 'abc');
    var var2 = uniqueVars.addVar('foo', 'abc');
    expect(var1).to.equal(var2);
    done();
};