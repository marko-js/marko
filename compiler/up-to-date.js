var fs = require('fs'); // Fool the code inspectors for client-side bundlers

exports.getLastModified = function(sourceFile, taglibs) {

    var statSource = fs.statSync(sourceFile);

    var lastModifiedTime = statSource.mtime.getTime();

    var taglibFiles = taglibs.getInputFiles();
    var len = taglibFiles.length;
    for (var i=0; i<len; i++) {
        var taglibFileStat;
        var taglibFile = taglibFiles[i];

        try {
            taglibFileStat = fs.statSync(taglibFile);
        } catch(e) {
            continue;
        }

        lastModifiedTime = Math.max(lastModifiedTime, taglibFileStat.mtime.getTime());
    }

    return lastModifiedTime;
};

exports.checkUpToDate = function(targetFile, sourceFile, taglibs) {
    var statTarget;

    try {
        statTarget = fs.statSync(targetFile);
    } catch(e) {
        return false;
    }

    var statSource = fs.statSync(sourceFile);

    if (statSource.mtime.getTime() > statTarget.mtime.getTime()) {
        return false;
    }

    // Now check if any of the taglib files have been modified after the target file was generated

    var taglibFiles = taglibs.getInputFiles();
    var len = taglibFiles.length;
    for (var i=0; i<len; i++) {
        var taglibFileStat;
        var taglibFile = taglibFiles[i];

        try {
            taglibFileStat = fs.statSync(taglibFile);
        } catch(e) {
            continue;
        }

        if (taglibFileStat.mtime.getTime() > statTarget.mtime.getTime()) {
            return false;
        }
    }

    return true;

};