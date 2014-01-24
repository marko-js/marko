'use strict';
var createError = require('raptor-util').createError;
var compiler = require('./compiler');
var resources = require('raptor-resources');
var packaging = require('raptor-packaging');
var discoveryComplete = false;
var searchPathListenerHandler = null;
var loadedTaglibPaths = {};

require('raptor-util').extend(compiler, {
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
    }
    
});