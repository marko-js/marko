var nodePath = require('path');

exports.check = function(marko, markoCompiler, expect, done) {
    var template = marko.load(nodePath.join(__dirname, 'template.marko'));
    var data = {
      name: 'John',
      $global: {
          greeting: 'Greetings'
      }
    };
    var result = template.renderSync(data);
    expect(result.toString()).to.equal('Greetings John!');
    done();
};