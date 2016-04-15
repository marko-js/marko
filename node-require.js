/*
* Copyright 2011 eBay Software Foundation
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var path = require('path');
var resolveFrom = require('resolve-from');
var fs = require('fs');
var fsReadOptions = { encoding: 'utf8' };

function compile(templatePath, markoCompiler, compilerOptions) {
    var writeToDisk = compilerOptions.writeToDisk;
    if (writeToDisk == null) {
        writeToDisk = markoCompiler.defaultOptions.writeToDisk;
    }
    var templateSrc;
    var compiledSrc;
    var compiler;

    if (writeToDisk === false) {
        // Don't write the compiled template to disk. Instead, load it
        // directly from the compiled source using the internals of the
        // Node.js module loading system.
        templateSrc = fs.readFileSync(templatePath, fsReadOptions);
        compiler = markoCompiler.createCompiler(templatePath, compilerOptions);
        compiledSrc = compiler.compile(templateSrc);
    } else {
        var targetDir = path.dirname(templatePath);

        var targetFile = templatePath + '.js';

        if (markoCompiler.defaultOptions.assumeUpToDate && fs.existsSync(targetFile)) {
            // If the target file already exists and "assumeUpToDate" then just use the previously
            // compiled template.
            return fs.readFileSync(targetFile, fsReadOptions);
        }

        compiler = markoCompiler.createCompiler(templatePath, compilerOptions);
        var isUpToDate = compiler.checkUpToDate(targetFile);

        if (isUpToDate) {
            compiledSrc = fs.readFileSync(targetFile, fsReadOptions);
        } else {
            templateSrc = fs.readFileSync(templatePath, fsReadOptions);
        	compiledSrc = compiler.compile(templateSrc);

            // Write to a temporary file and move it into place to avoid problems
            // assocatiated with multiple processes write to the same file. We only
            // write the compiled source code to disk so that stack traces will
            // be accurate.
            var filename = path.basename(targetFile);
            var tempFile = path.join(targetDir, '.' + process.pid + '.' + Date.now() + '.' + filename);
            fs.writeFileSync(tempFile, compiledSrc, fsReadOptions);
            fs.renameSync(tempFile, targetFile);
        }
    }

    // We attach a path to the compiled template so that hot reloading will work.
    return compiledSrc;
}

function getLoadedTemplate(path) {
    var cached = require.cache[path];
    return cached && cached.exports.render ? cached.exports : undefined;
}

exports.install = function(options) {
    options = options || {};

    var compilerOptions = options.compilerOptions || {};

    var extension = options.extension || '.marko';

    if (extension.charAt(0) !== '.') {
        extension = '.' + extension;
    }

    if (require.extensions[extension]) {
        return;
    }

    require.extensions[extension] = function markoExtension(module, filename) {
        var targetFile = filename + '.js';

        var cachedTemplate = getLoadedTemplate(targetFile) || getLoadedTemplate(filename);
        if (cachedTemplate) {
            // The template has already been loaded so use the exports of the already loaded template
            module.exports = cachedTemplate;
            return;
        }

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
        module._compile(compiledSrc, targetFile);
    };
};