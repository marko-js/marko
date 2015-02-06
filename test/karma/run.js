var nodePath = require('path');

process.chdir(__dirname);

require('marko/hot-reload').enable();
var optimizer = require('optimizer');
var fs = require('fs');
var mkdirp = require('mkdirp');
var karma = require('karma');
var async = require('async');

var renderPages = require('./render-pages');
var generatedDir = nodePath.join(__dirname, 'generated');
var firstRun = true;

var args = require('raptor-args').createParser({
        '--watch': 'boolean',
        '--all-browsers': 'boolean',
        '--browsers --browser': 'string[]'
    })
    .parse();

mkdirp.sync(nodePath.join(generatedDir));

optimizer.configure({
    outputDir: generatedDir,
    bundlingEnabled: false,
    fingerprintsEnabled: false,
    require: {
        runImmediately: true
    },
    plugins: [
        {
            plugin: 'optimizer-require',
            config: {
                builtins: {
                    'marko-widgets': require.resolve('../../')
                }
            }
        },
        'optimizer-marko'
    ]
});



var watch = args.watch === true;

var port = 9876;

function run() {
    async.series([
            renderPages,
            function generateBrowserFiles(callback) {
                console.log('[marko-widgets/test/karma] Generating test files for the browser...');
                optimizer.optimizePage({
                    name: 'test',
                    dependencies: [
                        nodePath.join(__dirname, 'optimizer.json')
                    ],
                    flags: [
                        'marko-widgets/no-client-init'
                    ]
                },
                function(err, optimizedPage) {
                    if (err) {
                        return callback(err);
                    }

                    console.log('[marko-widgets/test/karma] Browser test files generated.');

                    var filesJSON = JSON.stringify(optimizedPage.getJavaScriptFiles(), null, 2);
                    fs.writeFileSync(nodePath.join(generatedDir, 'files.js'), 'module.exports=' + filesJSON + ';');
                    callback();
                });
            }
        ],
        function(err) {
            if (err) {
                throw err;
            }

            if (firstRun) {
                var karmaConfig = {
                    colors: true,
                    autoWatch: watch === true,
                    singleRun: watch === false,
                    port: port,
                    // logLevel: 'WARN',
                    // browsers: ['PhantomJS'],
                    configFile: require.resolve('./karma.conf.js')
                };

                if (args.browsers) {
                    karmaConfig.browsers = args.browsers;
                } else if (args.allBrowsers) {
                    karmaConfig.browsers = ['PhantomJS', 'Chrome', 'Firefox', 'Safari'];
                }

                karma.server.start(
                    karmaConfig,
                    function(exitCode) {
                        console.log('Karma has exited with ' + exitCode);
                        process.exit(exitCode);
                    });

                firstRun = false;

                if (args.watch === true) {
                    require('ignoring-watcher').createWatcher({
                            // Directory to watch. Defaults to process.cwd()
                            dir: nodePath.join(__dirname, '../../'),

                            // One or more ignore patterns
                            ignorePatterns: [
                                'node_modules',
                                '/static',
                                '/.cache',
                                '.*',
                                '*.marko.js',
                                '/test/karma/generated'
                            ]
                        })
                        .on('ready', function(eventArgs) {
                            // console.log('Watching: ' + eventArgs.dirs.join(', '));
                            // console.log('Ignore patterns:\n  ' + eventArgs.ignorePatterns.join('  \n'));
                        })
                        .on('modified', function(eventArgs) {
                            require('marko/hot-reload').handleFileModified(eventArgs.path);
                            optimizer.handleWatchedFileChanged(eventArgs.path);
                            console.log('[marko-widgets/test/karma] File modified: ' + eventArgs.path);
                            run();
                        })
                        .startWatching();
                }
            }
        });

    optimizer.optimizePage({
        name: 'test',
        dependencies: [
            nodePath.join(__dirname, 'optimizer.json')
        ]
    },
    function(err, optimizedPage) {
        if (err) {
            throw err;
        }

        var filesJSON = JSON.stringify(optimizedPage.getJavaScriptFiles(), null, 2);
        fs.writeFileSync(nodePath.join(generatedDir, 'files.js'), 'module.exports=' + filesJSON + ';');
    });
}

run();

