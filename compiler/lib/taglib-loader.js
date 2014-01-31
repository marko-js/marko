var fs = require('fs');
var nodePath = require('path');
var Taglib = require('./Taglib');
var cache = {};
var forEachEntry = require('raptor-util').forEachEntry;

function invokeHandlers(config, handlers, path) {
    if (!config) {
        throw new Error('"config" argument is required');
    }

    if (typeof config !== 'object') {
        throw new Error('Object expected for ' + path);
    }

    for (var k in config) {
        if (config.hasOwnProperty(k)) {
            var handler = handlers[k];
            if (!handler) {
                throw new Error('Invalid option of "' + k + '" for ' + path + '. Allowed: ' + Object.keys(handlers).join(', '));
            }
            try {
                handler(config[k]);    
            }
            catch(e) {
                if (!e.invokeHandlerError) {
                    var error = new Error('Error while applying option of "' + k + '" for ' + path + '. Exception: ' + (e.stack || e));
                    error.invokeHandlerError = e;
                    throw error;
                }
                else {
                    throw e;
                }
            }
        }
    }
}

function load(path) {
    if (cache[path]) {
        return cache[path];
    }

    var src = fs.readFileSync(path, {encoding: 'utf8'});
    var taglib = new Taglib(path);
    var dirname = nodePath.dirname(path);

    invokeHandlers(JSON.parse(src), {
        'aliases': function(aliases) {
            aliases.forEach(function(alias) {
                taglib.addAlias(alias);
            });
        },
        'import-tags': function(tags) {
            forEachEntry(tags, function(tagName, path) {
                // path = nodePath.resolve(dirname, path);
                // if (!fs.existsSync(path)) {
                //     throw new Error('Tag at path "' + path + '" does not exist');
                // }
            });
        }
        
    }, path);

    taglib.id = path;

    cache[path] = taglib;

    return taglib;
}

function loadTaglibXml(taglibXml, path) {
    var TaglibXmlLoader = require('./TaglibXmlLoader');
    var taglib = TaglibXmlLoader.load(taglibXml, path);
    taglib.id = path;
    return taglib;
}

function loadTaglibXmlFromFile(path) {
    var src = fs.readFileSync(path, {encoding: 'utf8'});
    return loadTaglibXml(src, path);
}

exports.load = load;
exports.loadTaglibXml = loadTaglibXml;
exports.loadTaglibXmlFromFile = loadTaglibXmlFromFile;