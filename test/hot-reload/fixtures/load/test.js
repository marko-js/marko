var fs = require('fs');
var nodePath = require('path');

exports.check = function (marko, hotReload, expect, helpers) {
    var srcTemplatePath = nodePath.join(__dirname, 'template.marko');
    var templateSrc = fs.readFileSync(srcTemplatePath, { encoding: 'utf8' });

    var tempTemplatePath = nodePath.join(__dirname, 'template.temp.marko');
    fs.writeFileSync(tempTemplatePath, templateSrc, { encoding: 'utf8' });

    var template = marko.load(tempTemplatePath);

    helpers.compareSequence(template.renderSync({ name: 'John' }).toString());

    fs.writeFileSync(tempTemplatePath, templateSrc + '!', { encoding: 'utf8' });

    helpers.compareSequence(template.renderSync({ name: 'John' }).toString());

    hotReload.handleFileModified(tempTemplatePath);

    helpers.compareSequence(template.renderSync({ name: 'John' }).toString());
};