var fs = require('fs');
var nodePath = require('path');

exports.check = function(marko, hotReload, expect) {
    var srcTemplatePath = nodePath.join(__dirname, 'template.marko');
    var templateSrc = fs.readFileSync(srcTemplatePath, { encoding: 'utf8' });

    var tempTemplatePath = nodePath.join(__dirname, 'template.temp.marko');
    fs.writeFileSync(tempTemplatePath, templateSrc, { encoding: 'utf8' });

    var template = require(tempTemplatePath);

    expect(template.renderSync({ name: 'John' })).to.equal('Hello John!');

    fs.writeFileSync(tempTemplatePath, templateSrc + '!', { encoding: 'utf8' });

    expect(template.renderSync({ name: 'John' })).to.equal('Hello John!');

    hotReload.handleFileModified(tempTemplatePath);

    expect(template.renderSync({ name: 'John' })).to.equal('Hello John!!');
};