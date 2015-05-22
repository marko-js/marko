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

        // Write to a temporary file and move it into place to avoid problems
        // assocatiated with multiple processes write to teh same file. We only
        // write the compiled source code to disk so that stack traces will
        // be accurate.
        var filename = path.basename(targetFile);
        var tempFile = path.join(targetDir, '.' + process.pid + '.' + Date.now() + '.' + filename);
        fs.writeFileSync(tempFile, compiledSrc, fsReadOptions);
        fs.renameSync(tempFile, targetFile);
    }

    // The compiled output is for a CommonJS module. The code that we want to load should
    // actually export a loaded template instance so we append some additional code to
    // load the compiled template and assign it to `module.exports`. We also attach a
    // path to the compiled template so that hot reloading will work.
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
        // Resolve the appropriate compiler relative to the location of the
        // marko template file on disk using the "resolve-from" module.
        var dirname = path.dirname(filename);
        var markoCompilerModulePath = resolveFrom(dirname, 'marko/compiler');
        var markoCompiler = require(markoCompilerModulePath);

        // Now use the appropriate Marko compiler to compile the Marko template
        // file to JavaScript source code:
        var compiledSrc = compile(filename, markoCompiler, compilerOptions);

        // Append ".js" to the filename since that is where we write the compiled
        // source code that is being loaded. This allows stack traces to match up.
        module._compile(compiledSrc, filename + '.js');
    };
};