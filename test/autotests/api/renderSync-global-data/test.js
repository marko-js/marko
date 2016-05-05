var nodePath = require('path');

exports.check = function(marko, markoCompiler, expect, done) {
    var template = marko.load(nodePath.join(__dirname, 'template.marko'));
    var data = {
      name: 'John',
      $global: {
          greeting: 'Greetings'
      }
    };
    var output = template.renderSync(data);
    expect(output).to.equal('Greetings John!');
    done();
};