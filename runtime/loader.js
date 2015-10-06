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

'use strict';
var nodePath = require('path');
var fs = require('fs');
var Module = require('module').Module;
var markoCompiler = require('../compiler');
var cwd = process.cwd();
var fsReadOptions = {encoding: 'utf8'};

if (process.env.hasOwnProperty('MARKO_HOT_RELOAD')) {
    require('../hot-reload').enable();
}

// If process was launched with browser refresh then automatically
// enable browser-refresh
require('../browser-refresh').enable();

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

function loadFile(templatePath) {
    templatePath = nodePath.resolve(cwd, templatePath);
    var targetDir = nodePath.dirname(templatePath);

    var targetFile = templatePath + '.js';
    var compiler = markoCompiler.createCompiler(templatePath);
    var isUpToDate = compiler.checkUpToDate(targetFile);
    if (isUpToDate) {
        return require(targetFile);
    }

	var templateSrc = fs.readFileSync(templatePath, fsReadOptions);
	var compiledSrc = compiler.compile(templateSrc);

    // console.log('Compiled code for "' + templatePath + '":\n' + compiledSrc);

    var filename = nodePath.basename(targetFile);
    var tempFile = nodePath.join(targetDir, '.' + process.pid + '.' + Date.now() + '.' + filename);
    fs.writeFileSync(tempFile, compiledSrc, fsReadOptions);
    fs.renameSync(tempFile, targetFile);

    return require(targetFile);
}

module.exports = function load(templatePath, templateSrc, options) {
    var writeToDisk;

    if (options && (options.writeToDisk != null)) {
        // options is provided and options.writeToDisk is non-null
        writeToDisk = options.writeToDisk;
    } else {
        // writeToDisk should be inferred from defaultOptions
        writeToDisk = markoCompiler.defaultOptions.writeToDisk;
    }

    // If the template source is provided then we can compile the string
    // in memory and there is no need to read template file from disk or
    // write compiled code to disk.
    //
    // If writeToDisk is false then there will be no up-to-date check
    // since compiled source won't be written to disk.
    if ((templateSrc != null) || (writeToDisk === false)) {
        // Don't write the compiled template to disk. Instead, load it
        // directly from the compiled source using the internals of the
        // Node.js module loading system.
        var compiler = markoCompiler.createCompiler(templatePath);
        if (templateSrc === undefined) {
            templateSrc = fs.readFileSync(templatePath, fsReadOptions);
        }

    	var compiledSrc = compiler.compile(templateSrc);
        return loadSource(templatePath, compiledSrc);
    } else {
        return loadFile(templatePath);
    }
};

module.exports.loadSource = loadSource;
