var fs = require('fs');
var path = require('path');
process.chdir(path.join(__dirname, '../'));

var spawn = require('child_process').spawn;

require('marko/hot-reload').enable();
require('marko/compiler').defaultOptions.preserveWhitespace = true;
var lasso = require('lasso');

var outputDir = path.join(__dirname, 'generated');
var cacheDir = path.join(__dirname, '../.cache');
var rootDir = path.join(__dirname, '../../');

try {
    fs.mkdirSync(outputDir);
} catch(e) {
    // Ignore the error if the directory already exists
}

var args = require('raptor-args').createParser({
        '--watch': 'boolean'
    })
    .parse();

require('lasso').configure({
    outputDir: path.join(outputDir, 'static'),
    plugins: [
        'lasso-marko'
    ],
    urlPrefix: './static',
    fingerprintsEnabled: false,
    bundlingEnabled: false
});

var running = false;
var fileModified = false;

function run() {
    console.log('Preparing client-side tests...');

    running = true;
    fileModified = false;

    var pageTemplate = require('marko').load(require.resolve('../fixtures/pages/server-init/template.marko'));
    var pageLayoutTemplate = require('marko').load(require.resolve('./page-layout.marko'));
    var pageHtmlFile = path.join(outputDir, 'test-page.html');

    var out = fs.createWriteStream(pageHtmlFile, 'utf8');
    pageTemplate.render({
            layout: pageLayoutTemplate
        }, out)
        .on('finish', function() {
            console.log('Running client tests using mocha-phantomjs...');
            spawn(
                'npm',
                ['run', 'mocha-phantomjs-run', '--loglevel=silent'],
                {
                    cwd: rootDir,
                    stdio: 'inherit'
                })
                .on('close', function (code) {
                    running = false;

                    if (args.watch === true) {
                        if (fileModified) {
                            run();
                        }
                    } else {
                        process.exit(code);
                    }
                });
        });
}

run();

if (args.watch === true) {
    require('ignoring-watcher').createWatcher({
            // Directory to watch. Defaults to process.cwd()
            dir: rootDir,

            // One or more ignore patterns
            ignorePatterns: [
                'node_modules',
                '.cache',
                '.*',
                '*.marko.js',
                'npm-debug.log',
                'generated'
            ]
        })
        .on('ready', function(eventArgs) {
            // console.log('Watching: ' + eventArgs.dirs.join(', '));
            // console.log('Ignore patterns:\n  ' + eventArgs.ignorePatterns.join('  \n'));
        })
        .on('modified', function(eventArgs) {
            var path = eventArgs.path;

            if (path.startsWith(outputDir)) {
                return;
            } else if (path.startsWith(cacheDir)) {
                return;
            } else if (path.endsWith('.log')) {
                return;
            }


            require('marko/hot-reload').handleFileModified(eventArgs.path);
            lasso.handleWatchedFileChanged(eventArgs.path);
            console.log('[marko-widgets/test/client/mocha-widgets] File modified: ' + eventArgs.path);

            if (running) {
                fileModified = true;
            } else {
                run();
            }
        })
        .startWatching();

}