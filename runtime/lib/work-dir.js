exports.workDir = null;

var logger = require('raptor-logging').logger(module);
var taglibsWorkFile = null;
var taglibsLastModified = null;

function getWorkDir() {
    return exports.workDir;
}

function _readTaglibsLastModified(workDir) {
    var taglibsWorkFile = taglibsWorkFile;
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
}

function recordLoadedTaglib(taglibResource) {
    var workDir = getWorkDir();
    if (workDir) {
        var taglibsLastModified = _readTaglibsLastModified(workDir);
        taglibsLastModified.lastModified = Math.max(taglibResource.lastModified(), taglibsLastModified.lastModified || 0);
        taglibsLastModified.urls[taglibResource.getURL()] = true;
        var newStr = taglibsLastModified.lastModified + '\n' + Object.keys(taglibsLastModified.urls).join('\n');
        if (newStr != taglibsLastModified.written) {
            taglibsLastModified.written = newStr;
            taglibsWorkFile.writeAsString(newStr);
        }
    }
}

function _validateWorkDir(workDir) {
    if (!workDir) {
        return;
    }
    logger.debug('Validating work directory at path "' + workDir + '"...');
    var taglibsLastModified = _readTaglibsLastModified(workDir);
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
}

function setWorkDir(workDir) {
    exports.workDir = _workDir;

    if (workDir) {
        logger.debug('Setting work directory to "' + workDir + '"...');
        var File = require('raptor-files/File');
        if (typeof workDir === 'string') {
            workDir = new File(workDir);
        }
        
        taglibsWorkFile = new File(workDir, 'taglibs.txt');
        _validateWorkDir(workDir);
    } else {
        workDir = null;
        taglibsWorkFile = null;
    }
}


exports.recordLoadedTaglib = recordLoadedTaglib;
exports.setWorkDir = setWorkDir;