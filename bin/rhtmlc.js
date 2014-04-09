var raptorTemplatesCompiler = require('../compiler');
var fs = require('fs');
var nodePath = require('path');
var Minimatch = require('minimatch').Minimatch;
var cwd = process.cwd();
require('raptor-ecma/es6');

var mmOptions = {
    matchBase: true,
    dot: true,
    flipNegate: true
};

function relPath(path) {
    if (path.startsWith(cwd)) {
        return path.substring(cwd.length+1);
    }
}

var args = require('raptor-args').createParser({
        '--help': {
            type: 'boolean',
            description: 'Show this help message'
        },
        '--files --file -f *': {
            type: 'string[]',
            description: 'A set of directories or files to compile'
        },
        '--ignore -i': {
            type: 'string[]',
            description: 'An ignore rule (default: --ignore "/node_modules" ".*")'
        },
        '--clean -c': {
            type: 'boolean',
            description: 'Clean all of the *.rhtml.js files'
        }
    })
    .usage('Usage: $0 <pattern> [options]')
    .example('Compile a single template', '$0 template.rhtml')
    .example('Compile all templates in the current directory', '$0 .')
    .example('Compile multiple templates', '$0 template.rhtml src/ foo/')
    .example('Delete all *.rhtml.js files in the current directory', '$0 . --clean')
    .validate(function(result) {
        if (result.help) {
            this.printUsage();
            process.exit(0);
        }

        if (!result.files || result.files.length === 0) {
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


var ignoreRules = args.ignore;

if (!ignoreRules) {
    ignoreRules = ['/node_modules', '.*'];
}

ignoreRules = ignoreRules.filter(function (s) {
    s = s.trim();
    return s && !s.match(/^#/);
});

ignoreRules = ignoreRules.map(function (pattern) {
    
    return new Minimatch(pattern, mmOptions);
});


function isIgnored(path, dir, stat) {
    if (path.startsWith(dir)) {
        path = path.substring(dir.length);
    }

    path = path.replace(/\\/g, '/');

    var ignore = false;
    var ignoreRulesLength = ignoreRules.length;
    for (var i=0; i<ignoreRulesLength; i++) {
        var rule = ignoreRules[i];
        
        var match = rule.match(path);
        
        if (!match && stat && stat.isDirectory()) {
            try {
                stat = fs.statSync(path);
            } catch(e) {}

            if (stat && stat.isDirectory()) {
                match = rule.match(path + '/');
            }    
        }
        

        if (match) {
            if (rule.negate) {
                ignore = false;
            } else {
                ignore = true;
            }
        }
    }

    return ignore;
}

function walk(files, options, done) {
    if (!files || files.length === 0) {
        done('No files provided');
    }

    var pending = 0;

    if (!Array.isArray(files)) {
        files = [files];
    }

    var fileCallback = options.file;
    var context = {
        errors: [],
        beginAsync: function() {
            pending++;
        },
        endAsync: function(err) {
            if (err) {
                this.errors.push(err);
            }

            pending--;

            if (pending === 0) {
                if (this.errors.length) {
                    done(this.errors);
                } else {
                    done(null);
                }
                
            }
        }
    };

    function doWalk(dir) {
        context.beginAsync();
        fs.readdir(dir, function(err, list) {
            if (err) {
                return context.endAsync(err);
            }

            if (list.length) {
                list.forEach(function(basename) {
                    var file = nodePath.join(dir, basename);

                    context.beginAsync();
                    fs.stat(file, function(err, stat) {
                        if (err) {
                            return context.endAsync(err);
                        }

                        if (!isIgnored(file, dir, stat)) {
                            if (stat && stat.isDirectory()) {
                                doWalk(file);
                            } else {
                                fileCallback(file, context);
                            }    
                        }

                        context.endAsync();
                    });
                });
            }

            context.endAsync();
        });
    }

    for (var i=0; i<files.length; i++) {
        var file = nodePath.resolve(cwd, files[i]);

        var stat = fs.statSync(file);

        if (stat.isDirectory()) {
            doWalk(file);
        } else {
            fileCallback(file, context);
        }
    }
}

if (args.clean) {
    var deleteCount = 0;

    walk(
        args.files,
        {
            file: function(file, context) {
                var basename = nodePath.basename(file);

                if (basename.endsWith('.rhtml.js') || basename.endsWith('.rxml.js')) {
                    context.beginAsync();
                    fs.unlink(file, function(err) {
                        if (err) {
                            return context.endAsync(err);
                        }
                        deleteCount++;
                        console.log('Deleted: ' + file);
                        context.endAsync();
                    });

                    
                }
            }
        },
        function(err) {
            if (deleteCount === 0) {
                console.log('No *.rhtml.js files were found. Already clean.');
            } else {
                console.log('Deleted ' + deleteCount + ' file(s)');
            }
            
        });

} else {
    var found = {};
    var compileCount = 0;
    var failed;
    var failed = [];

    var compile = function(path, context) {
        if (found[path]) {
            return;
        }

        found[path] = true;

        var outPath = path + '.js';
        console.log('Compiling:\n  Input: ' + relPath(path) + '\n  Output: ' + relPath(outPath) + '\n');
        context.beginAsync();
        raptorTemplatesCompiler.compileFile(path, function(err, src) {
            if (err) {
                failed.push('Failed to compile "' + path + '". Error: ' + (err.stack || err));
                context.endAsync(err);
                return;
            }

            context.beginAsync();
            fs.writeFile(outPath, src, {encoding: 'utf8'}, function(err, src) {
                if (err) {
                    failed.push('Failed to write "' + path + '". Error: ' + (err.stack || err));
                    context.endAsync(err);
                    return;
                }

                compileCount++;
                context.endAsync();

            });

            context.endAsync();
        });
    };


    if (args.files && args.files.length) {
        walk(
            args.files,
            {
                file: function(file, context) {
                    var basename = nodePath.basename(file);

                    if (basename.endsWith('.rhtml') || basename.endsWith('.rxml')) {
                        compile(file, context);
                    }
                }
            },
            function(err) {
                if (err) {
                    if (failed.length) {
                        console.error('The following errors occurred:\n- ' + failed.join('\n- '));
                    } else {
                        console.error(err);
                    }

                    return;
                }

                if (compileCount === 0) {
                    console.log('No templates found');
                } else {
                    console.log('Compiled ' + compileCount + ' templates(s)');
                }
                
            });
    }    
}