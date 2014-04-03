var nodePath = require('path');
var fs = require('fs');
var Module = require('module').Module;
var raptorTemplatesCompiler = require('../../compiler');
var cwd = process.cwd();

function loadSource(templatePath, compiledSrc) {
    var templateModulePath = templatePath + '.js';

    var templateModule = new Module(templateModulePath, module);
    templateModule.paths = Module._nodeModulePaths(nodePath.dirname(templateModulePath));
    templateModule.filename = templateModulePath;


    templateModule._compile(
        compiledSrc,
        templateModulePath);

    return templateModule.exports;
}

module.exports = function load(templatePath) {
    templatePath = nodePath.resolve(cwd, templatePath);
    
    var targetFile = templatePath + '.js';
    var compiler = raptorTemplatesCompiler.createCompiler(templatePath);
    var isUpToDate = compiler.checkUpToDate(templatePath, targetFile);
    if (isUpToDate) {
        return require(targetFile);
    }

	var templateSrc = fs.readFileSync(templatePath, {encoding: 'utf8'});
	var compiledSrc = compiler.compile(templateSrc);

    // console.log('Compiled code for "' + templatePath + '":\n' + compiledSrc);
     
    fs.writeFileSync(targetFile, compiledSrc, {encoding: 'utf8'});

    return require(targetFile);
};

module.exports.loadSource = loadSource;