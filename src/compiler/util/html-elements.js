
var lassoPackageRoot = require('lasso-package-root');
var path = require('path');
var lassoCachingFS = require('lasso-caching-fs');
var fs = require('fs');
var stripJsonComments = require('strip-json-comments');
var fsReadOptions = { encoding: 'utf8' };
var modules = require('../modules');

function parseJSONFile(path) {
    var json = fs.readFileSync(path, fsReadOptions);

    try {
        var taglibProps = JSON.parse(stripJsonComments(json));
        return taglibProps;
    } catch(e) {
        throw new Error('Unable to parse JSON file at path "' + path + '". Error: ' + e);
    }
}


function loadTags(file) {

    var raw = parseJSONFile(file);
    var tags = {};

    for (var k in raw) {
        if (raw.hasOwnProperty(k)) {
            if (k.charAt(0) === '<' && k.charAt(k.length - 1) === '>') {
                var tagName = k.substring(1, k.length - 1);
                var tag = tags[tagName] = raw[k];
                if (tag.import && tag.import[0] === '.') {
                    tag.import = modules.resolveFrom(path.dirname(file), tag.import);
                }
            }
        }
    }

    return tags;
}


var cache = {};

function getPackageRootDir(dirname) {
    try {
        return lassoPackageRoot.getRootDir(dirname);
    } catch(e) {
        return undefined;
    }
}

function getRegisteredElement(tagName, dir) {
    var packageRootDir = getPackageRootDir(dir);

    var currentDir = dir;

    while (true) {
        var filePath = path.join(currentDir, 'html-elements.json');
        if (lassoCachingFS.existsSync(filePath)) {
            var tags = cache[filePath];
            if (!tags) {
                tags = cache[filePath] = loadTags(filePath);
            }

            if (tags[tagName]) {
                return tags[tagName];
            }
        }

        var parentDir = path.dirname(currentDir);
        if (!parentDir || parentDir === currentDir || parentDir === packageRootDir) {
            break;
        }
        currentDir = parentDir;
    }
}

exports.getRegisteredElement = getRegisteredElement;