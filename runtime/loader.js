var nodePath = require('path');
var fs = require('fs');
var Module = require('module').Module;
var markoCompiler = require('../compiler');
var cwd = process.cwd();

if (process.env.hasOwnProperty('MARKO_HOT_RELOAD')) {
    require('../hot-reload').enable();
}

if (process.env.hasOwnProperty('MARKO_BROWSER_REFRESH')) {
    require('../browser-refresh').enable();
}

if (process.env.MARKO_CLEAN === '' || process.env.MARKO_CLEAN === 'true') {
    markoCompiler.defaultOptions.checkUpToDate = false;
}

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
    var targetDir = nodePath.dirname(templatePath);

    var targetFile = templatePath + '.js';
    var compiler = markoCompiler.createCompiler(templatePath);
    var isUpToDate = compiler.checkUpToDate(targetFile);
    if (isUpToDate) {
        return require(targetFile);
    }

	var templateSrc = fs.readFileSync(templatePath, {encoding: 'utf8'});
	var compiledSrc = compiler.compile(templateSrc);

    // console.log('Compiled code for "' + templatePath + '":\n' + compiledSrc);

    var filename = nodePath.basename(targetFile);
    var tempFile = nodePath.join(targetDir, '.' + process.pid + '.' + Date.now() + '.' + filename);
    fs.writeFileSync(tempFile, compiledSrc, {encoding: 'utf8'});
    fs.renameSync(tempFile, targetFile);

    return require(targetFile);
};

module.exports.loadSource = loadSource;
