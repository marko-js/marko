exports.check = function(marko, markoCompiler, expect, done) {
    var UniqueVars = require('marko/compiler/util/UniqueVars');

    var uniqueVars = new UniqueVars();
    var var1 = uniqueVars.addVar('foo', { name: 'Frank' });
    var var2 = uniqueVars.addVar('foo', { name: 'Frank' });
    expect(var1).to.equal(var2);
    done();
};