var path = require('path');
var resolveFrom = require('resolve-from');
var fs = require('fs');
var fsReadOptions = { encoding: 'utf8' };

function compile(templatePath, markoCompiler, compilerOptions) {

    var targetDir = path.dirname(templatePath);

    var targetFile = templatePath + '.js';
    var compiler = markoCompiler.createCompiler(templatePath, compilerOptions);
    var isUpToDate = compiler.checkUpToDate(targetFile);
    var compiledSrc;

    if (isUpToDate) {
        compiledSrc = fs.readFileSync(targetFile, fsReadOptions);
    } else {
        var templateSrc = fs.readFileSync(templatePath, fsReadOptions);
    	compiledSrc = compiler.compile(templateSrc);
        var filename = path.basename(targetFile);
        var tempFile = path.join(targetDir, '.' + process.pid + '.' + Date.now() + '.' + filename);
        fs.writeFileSync(tempFile, compiledSrc, fsReadOptions);
        fs.renameSync(tempFile, targetFile);
    }

    return compiledSrc + '\nexports.path=__filename;\nmodule.exports = require("marko").load(exports);';
}

exports.install = function(options) {
    options = options || {};

    var compilerOptions = options.compilerOptions;

    var extension = options.extension || '.marko';

    if (extension.charAt(0) !== '.') {
        extension = '.' + extension;
    }

    if (require.extensions[extension]) {
        return;
    }

    require.extensions[extension] = function markoExtension(module, filename) {
        var dirname = path.dirname(filename);
        var markoCompilerModulePath = resolveFrom(dirname, 'marko/compiler');
        var markoCompiler = require(markoCompilerModulePath);
        var compiledSrc = compile(filename, markoCompiler, compilerOptions);
        module._compile(compiledSrc, filename + '.js');
    };
};