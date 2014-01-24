var createError = require('raptor-util').createError;
'use strict';
var target = require('./TemplateCompiler');
var File = require('raptor-files/File');
var resources = require('raptor-resources');
function optionsKey(options) {
    var key = JSON.stringify(options);
    var crypto = require('crypto');
    var shasum = crypto.createHash('sha1');
    shasum.update(key);
    var checksum = shasum.digest('hex');
    if (checksum.length > 5) {
        checksum = checksum.substring(0, 5);
    }
    require('raptor-util').extend(target, checksum);
    return;
}
var logger = require('raptor-logging').logger('raptor/templating/compiler/TemplateCompiler_server');
require('raptor-util').extend(target, {
    _getOptionsKey: function () {
        if (!this._optionsKey) {
            this._optionsKey = optionsKey(this.options);
        }
        return this._optionsKey;
    },
    _getWorkFile: function (resource) {
        if (!this.workDir || !resource || !resource.isFileResource()) {
            return null;
        }
        var path = typeof resource === 'string' ? resource : resource.getPath();
        var workFile = new File(this.workDir, path + '.js');
        return workFile;
    },
    _compileResource: function (path) {
        var resource = resources.findResource(path);
        if (!resource.exists()) {
            throw createError(new Error('Unable to compile template with resource path "' + path + '". Resource not found'));
        }
        var compiledSource;
        var outputPath;
        var workFile;
        if (this.workDir) {
            workFile = this._getWorkFile(resource);
        }
        if (!workFile || !workFile.exists() || resource.lastModified() > workFile.lastModified()) {
            var xmlSource = resource.readAsString();
            compiledSource = this.compile(xmlSource, resource);
            if (workFile) {
                // If there is a work file then write out the compiled source so that we don't have to recompile again until the input resource is modified
                workFile.writeAsString(compiledSource);
            }
        } else {
            // The work file exists and it is up-to-date so we can use that to return the compiled source
            compiledSource = workFile.readAsString();
        }
        if (workFile) {
            outputPath = workFile.getAbsolutePath();
        } else {
            outputPath = resource.getURL() + '.js';
        }
        return {
            templateResource: resource,
            compiledSource: compiledSource,
            outputPath: outputPath,
            outputFile: workFile
        };
    },
    compileResource: function (path) {
        var compiledInfo = this._compileResource(path);
        return compiledInfo.compiledSource;
    },
    compileAndLoadResource: function (path) {
        var compiledInfo = this._compileResource(path);
        this._eval(compiledInfo.compiledSource, compiledInfo.outputPath);
        var resource = compiledInfo.templateResource;
        if (require('raptor-templates/compiler').isWatchingEnabled()) {
            resource.watch(function () {
                console.log('Template modified at path "' + resource.getURL() + '". Reloading template...');
                try {
                    this.compileAndLoadResource(resource);
                } catch (e) {
                    logger.warn('Unable to re-compile modified template at path "' + resource.getURL() + '". Exception: ' + e, e);
                }
            }, this);
        }
    }
});