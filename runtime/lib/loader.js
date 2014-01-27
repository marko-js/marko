var nodePath = require('path');
var fs = require('fs');
var Module = require('module').Module;
var compiler = require('../../compiler');

module.exports = function load(templatePath) {
    var templateModulePath = templatePath + '.js';
    var templateModule = new Module(templateModulePath, module);
    templateModule.paths = Module._nodeModulePaths(nodePath.dirname(templateModulePath));

    var templateSrc = fs.readFileSync(templatePath, {encoding: 'utf8'});
    var compiledSrc = compiler.compile(templateSrc, templatePath);
    
    templateModule._compile(
        'module.exports=' + compiledSrc,
        templateModulePath);

    return templateModule.exports;
};