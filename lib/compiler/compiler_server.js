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
 * @extension Server
 */
var createError = require('raptor-util').createError;
'use strict';
var compiler = require('raptor-templates/compiler');
var logger = require('raptor-logging').logger('raptor/templating/compiler');
var resources = require('raptor-resources');
var packaging = require('raptor-packaging');
var discoveryComplete = false;
var searchPathListenerHandler = null;
var watchingEnabled = false;
var loadedTaglibPaths = {};
var taglibsLastModified = null;
Object.defineProperty(compiler, 'workDir', {
    get: function () {
        return this._workDir;
    },
    set: function (val) {
        this.setWorkDir(val);
    }
});
require('raptor-util').extend(compiler, {
    enableWatching: function () {
        watchingEnabled = true;
    },
    disableWatching: function () {
        watchingEnabled = false;
    },
    isWatchingEnabled: function () {
        return watchingEnabled;
    },
    setWatchingEnabled: function (enabled) {
        watchingEnabled = enabled;
    },
    compileAndLoadResource: function (path, options) {
        this.createCompiler(options).compileAndLoadResource(path);
    },
    compileResource: function (path, options) {
        return this.createCompiler(options).compileResource(path);
    },
    loadModuleTaglibs: function (moduleName) {
        var manifest = require('raptor-packaging').getModuleManifest(moduleName);
        if (manifest) {
            this.loadPackageTaglibs(manifest);
        }
    },
    loadPackageTaglibs: function (manifest) {
        var taglibs = manifest.getRaptorProp('taglibs');
        if (taglibs) {
            raptor.forEach(taglibs, function (rtldPath) {
                var key = manifest.getURL() + ':' + rtldPath;
                if (!loadedTaglibPaths[key]) {
                    loadedTaglibPaths[key] = true;
                    var rtldResource = manifest.resolveResource(rtldPath);
                    if (!rtldResource || !rtldResource.exists()) {
                        throw createError(new Error('Raptor TLD "' + rtldPath + '" not found for manifest "' + manifest.getURL() + '"'));
                    }
                    this.loadTaglib(rtldResource);
                }
            }, this);
        }
    },
    findAndLoadTaglib: function (uri) {
        var pathBuilders = [
                function (uri) {
                    var path = uri;
                    if (!path.endsWith('.rtld')) {
                        path += '.rtld';
                    }
                    if (!path.startsWith('/')) {
                        path = '/' + path;
                    }
                    return path;
                },
                function (uri) {
                    var lastSlash = uri.lastIndexOf('/');
                    var shortName = lastSlash === -1 ? uri : uri.substring(lastSlash + 1);
                    path = uri + '/' + shortName;
                    if (!path.endsWith('.rtld')) {
                        path += '.rtld';
                    }
                    if (!path.startsWith('/')) {
                        path = '/' + path;
                    }
                    return path;
                }
            ];
        for (var i = 0, len = pathBuilders.length; i < len; i++) {
            var pathBuilder = pathBuilders[i];
            var path = pathBuilder(uri);
            var taglibResource = require('raptor-resources').findResource(path);
            if (taglibResource && taglibResource.exists()) {
                var taglib = require('raptor-templates/compiler').loadTaglib(taglibResource);
                this.addTaglibAlias(taglib.uri, uri);
                return;
            }
        }
        // Last resort: see if the URI is associated with a module that registers
        // the taglibs...
        require('raptor-templates/compiler').loadModuleTaglibs(uri);
    },
    discoverTaglibs: function (force) {
        if (discoveryComplete && force !== true) {
            return;
        }
        discoveryComplete = true;
        this.clearTaglibs();
        loadedTaglibPaths = {};
        packaging.forEachTopLevelPackageManifest(this.loadPackageTaglibs, this);
        resources.forEach('/rtlds', function (rtldsResource) {
            if (rtldsResource.isDirectory()) {
                rtldsResource.forEachChild(function (rtldResource) {
                    if (rtldResource.isFile() && rtldResource.getName().endsWith('.rtld')) {
                        this.loadTaglib(rtldResource);
                    }
                }, this);
            }
        }, this);
        if (!searchPathListenerHandler) {
            searchPathListenerHandler = require('raptor-resources').getSearchPath().subscribe('modified', function () {
                discoveryComplete = false;
                this.discoverTaglibs();    //If the search path is modified then rediscover the taglibs
            }, this);
        }
    },
    loadTaglib: function (taglibResource) {
        this.recordLoadedTaglib(taglibResource);
        var xml = taglibResource.readAsString();
        return this.loadTaglibXml(xml, taglibResource);
    },
    recordLoadedTaglib: function (taglibResource) {
        var workDir = this.getWorkDir();
        if (workDir) {
            var taglibsLastModified = this._readTaglibsLastModified(workDir);
            taglibsLastModified.lastModified = Math.max(taglibResource.lastModified(), taglibsLastModified.lastModified || 0);
            taglibsLastModified.urls[taglibResource.getURL()] = true;
            var newStr = taglibsLastModified.lastModified + '\n' + Object.keys(taglibsLastModified.urls).join('\n');
            if (newStr != taglibsLastModified.written) {
                taglibsLastModified.written = newStr;
                this._taglibsWorkFile.writeAsString(newStr);
            }
        }
    },
    _readTaglibsLastModified: function (workDir) {
        var taglibsWorkFile = this._taglibsWorkFile;
        if (taglibsLastModified == null) {
            taglibsLastModified = {
                lastModified: null,
                urls: {},
                written: null
            };
            if (taglibsWorkFile.exists()) {
                try {
                    taglibsLastModified.str = taglibsWorkFile.readAsString();
                    var lastModifiedEnd = taglibsLastModified.str.indexOf('\n');
                    taglibsLastModified.lastModified = parseInt(taglibsLastModified.str.substring(0, lastModifiedEnd), 10);
                    taglibsLastModified.str.substring(lastModifiedEnd + 1).split('\n').forEach(function (url) {
                        taglibsLastModified.urls[url] = true;
                    });
                } catch (e) {
                    logger.warn('Unable to read "' + taglibsWorkFile.getAbsolutePath() + '". Exception: ' + e, e);
                }
            }
        }
        return taglibsLastModified;
    },
    _validateWorkDir: function (workDir) {
        if (!workDir) {
            return;
        }
        logger.debug('Validating work directory at path "' + workDir + '"...');
        var taglibsLastModified = this._readTaglibsLastModified(workDir);
        function isUpToDate() {
            var lastModified = taglibsLastModified.lastModified;
            if (lastModified == null) {
                return true;
            }
            var files = require('raptor-files');
            var urls = Object.keys(taglibsLastModified.urls);
            for (var i = 0, len = urls.length; i < len; i++) {
                var url = urls[i];
                if (url.startsWith('file://')) {
                    var taglibFile = files.fromFileUrl(url);
                    if (!taglibFile.exists() || taglibFile.lastModified() > lastModified) {
                        return false;
                    }
                }
            }
            return true;
        }
        if (!isUpToDate()) {
            console.log('One ore more taglibs modified. Removing compiled templates work directory at path "' + workDir.getAbsolutePath() + '"...');
            workDir.remove();
        }
    },
    setWorkDir: function (workDir) {
        if (workDir) {
            logger.debug('Setting work directory to "' + workDir + '"...');
            var File = require('raptor-files/File');
            if (typeof workDir === 'string') {
                workDir = new File(workDir);
            }
            this._workDir = workDir;
            this._taglibsWorkFile = new File(this._workDir, 'taglibs.txt');
            this._validateWorkDir(workDir);
        } else {
            this._workDir = null;
            this._taglibsWorkFile = null;
        }
    },
    getWorkDir: function () {
        return this._workDir;
    }
});