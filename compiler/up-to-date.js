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