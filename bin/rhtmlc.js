var raptorTemplatesCompiler = require('../compiler');
var glob = require("glob");
var fs = require('fs');
var globPatterns;
var raptorPromises = require('raptor-promises');

var argv = require('raptor-args').createParser({
        '--help': {
            type: 'boolean',
            description: 'Show this help message'
        },
        '--templates --template -t *': {
            type: 'string[]',
            description: 'The path to a template to compile'
        }
    })
    .usage('Usage: $0 <pattern> [options]')
    .example('Compile a single template', '$0 rhtml template.rhtml')
    .example('Compile all templates in the directory tree', '$0 rhtml **/*.rhtml')
    .validate(function(result) {
        if (result.help) {
            this.printUsage();
            process.exit(0);
        }

        if (!result.templates || result.templates.length === 0) {
            this.printUsage();
            process.exit(1);
        }
    })
    .onError(function(err) {
        this.printUsage();

        if (err) {
            console.log();
            console.log(err);
        }

        process.exit(1);
    })
    .parse();

globPatterns = argv.templates;
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