var raptorTemplatesCompiler = require('../compiler');
var glob = require("glob");
var optimist = require('optimist');
var fs = require('fs');
var globPatterns;
var raptorPromises = require('raptor-promises');

var argv = optimist
    .alias('n', 'name')
            .describe('n', 'The name of the page being optimized (e.g. "my-page")')
    .usage('Usage: $0 <pattern> [options]\nExamples:\n' + 
       '  Compile a single template:\n' + 
       '   $0 rhtml template.rhtml\n\n' + 
       '  Compile all templates in the directory tree:\n' + 
       '   $0 rhtml **/*.rhtml')
    .check(function(argv) {
        if (!argv._) {
            throw '';
        }
    })
    .argv;

globPatterns = argv._;
var found = {};
var promises = [];

function compile(path) {
    if (found[path]) {
        return;
    }

    found[path] = true;

    var deferred = raptorPromises.defer();

    var outPath = path + '.js';
    console.log('Compiling "' + path + '" to "' + outPath + '"...');
    raptorTemplatesCompiler.compileFile(path, function(err, src) {
        if (err) {
            console.log('Failed to compile "' + path + '". Error: ' + (err.stack || err));
            deferred.reject(err);
            return;
        }

        fs.writeFile(outPath, src, {encoding: 'utf8'}, function(err, src) {
            if (err) {
                console.log('Failed to write "' + path + '". Error: ' + (err.stack || err));
                deferred.reject(err);
                return;
            }

            deferred.resolve();

        });
    });

    return deferred.promise;
}

globPatterns.forEach(function(globPattern) {
    var deferred = raptorPromises.defer();

    glob(globPattern, function (err, files) {
        if (err) {
            deferred.reject(err);
            return;
        }

        var compilePromises = files.map(compile);
        deferred.resolve(raptorPromises.all(compilePromises));
    });


    promises.push(deferred.promise);
});

raptorPromises.all(promises).then(
    function() {
        console.log('Done!');
    },
    function(err) {
        console.log('One or more templates failed to compile');
    });