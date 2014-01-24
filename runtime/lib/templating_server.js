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
/**
 *
 * @extension Server
 *
 */
'use strict';
var strings = require('raptor-strings');
var resources = require('raptor-resources');
var File = require('raptor-files/File');
var templateInfoByName = {};
var createError = require('raptor-util').createError;
var logger = require('raptor-logging').logger(module);
require('raptor-util').extend(require('./index'), {
    findTemplate: function (name) {
        var path = name;
        var resource;
        var templatePath;
        var templateFile = name instanceof File ? name : new File(name);
        if (templateFile.exists() && templateFile.isFile()) {
            resource = resources.createFileResource(templateFile.getAbsolutePath());
            name = templateFile.getAbsolutePath();
        } else if (name instanceof File) {
            return;
        } else {
            templatePath = path;
            if (!strings.startsWith(templatePath, '/')) {
                templatePath = '/' + templatePath;
            }
            if (!strings.endsWith(templatePath, '.rhtml')) {
                templatePath += '.rhtml';
            }
            resource = resources.findResource(templatePath);
        }
        if (!resource || !resource.exists()) {
            templatePath = path;
            if (!strings.startsWith(templatePath, '/')) {
                templatePath = '/' + templatePath;
            }
            var lastSlash = templatePath.lastIndexOf('/');
            if (lastSlash != -1) {
                resource = resources.findResource(templatePath + templatePath.substring(lastSlash) + '.rhtml');
            }
        }
        if (resource && resource.exists()) {
            templateInfoByName[name] = {
                resource: resource,
                filePath: resource.isFileResource() ? resource.getFilePath() : null,
                name: name
            };
            require('raptor-templates/compiler').compileAndLoadResource(resource, { templateName: name });
        }
    },
    unloadFile: function (path) {
        for (var curName in templateInfoByName) {
            if (templateInfoByName.hasOwnProperty(curName)) {
                var templateInfo = templateInfoByName[curName];
                if (templateInfo.filePath === path) {
                    this.unload(curName);
                }
            }
        }
    },
    getTemplateInfo: function (name) {
        return templateInfoByName[name] || { templateName: name };
    },
    renderToFile: function (templateName, data, outputFile, context) {
        if (typeof outputFile === 'string') {
            outputFile = new File(outputFile);
        }
        return this.renderToStringAsync(templateName, data, context).then(function (html) {
            outputFile.writeAsString(html);
        }, function (e) {
            logger.error(e);
        });
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
    }
});