var path = require('path');

require('require-self-ref');
require('../../node-require').install();
require('../../express');

require('../../compiler').configure({
    assumeUpToDate: false
});

var express = require('express');
var lasso = require('lasso');
var defaultPageTemplate = require('./page-template.marko');
var spawn = require('child-process-promise').spawn;
var fs = require('fs');
var mkdirp = require('mkdirp');
var md5Hex = require('md5-hex');
var mochaPhantomJSCommand = require.resolve('mocha-phantomjs-core');
var phantomjsBinPath = require('phantomjs-prebuilt').path;
var shouldCover = !!process.env.NYC_CONFIG;
var ok = require('assert').ok;

function generate(options) {
    return new Promise((resolve, reject) => {
        var testsFile = options.testsFile;
        var startServer = options.server === true;
        var pageTemplate = options.pageTemplate || defaultPageTemplate;
        var generatedDir = options.generatedDir;
        ok(generatedDir, '"options.generatedDir" is required');

        var outputFile = path.join(generatedDir, 'test.html');

        var browserDependencies = [
            "mocha/mocha.js",
            "mocha/mocha.css",
            "require-run: " + require.resolve('./mocha-setup'),
            'require-run: ' + testsFile,
            "require: jquery",
            {
                "require-run": require.resolve('./mocha-run'),
                "slot": "mocha-run"
            }
        ];

        var lassoConfig = {
            outputDir: path.join(generatedDir, 'static'),
            urlPrefix: startServer ? '/static' : './static',
            bundlingEnabled: false,
            fingerprintsEnabled: false,
            minify: false,
            plugins: [
                {
                    plugin: 'lasso-marko',
                    config: {
                        output: 'vdom'
                    }
                },
                require('./lasso-autotest-plugin')
            ]
        };

        if(shouldCover) {
            lassoConfig.plugins.push(
                require('./lasso-istanbul-plugin')
            );
        }

        var myLasso = lasso.create(lassoConfig);

        var templateData = {};

        Object.defineProperty(templateData, 'lasso', {
            value: myLasso,
            writable: false,
            configurable: false,
            enumerable: false
        });

        Object.defineProperty(templateData, 'browserDependencies', {
            value: browserDependencies,
            writable: false,
            configurable: false,
            enumerable: false
        });

        if (startServer) {
            var app = express();

            app.use(require('lasso/middleware').serveStatic({ lasso: myLasso }));
            app.get('/', function(req, res) {
                res.marko(pageTemplate, templateData);
            });

            var port = 8080;

            var server = app.listen(port, function(err) {
                if (err) {
                    throw err;
                }

                var host = 'localhost';
                var port = server.address().port;
                var url = `http://${host}:${port}`;

                console.log(`Server running at ${url}`);

                if (process.send) {
                    process.send('online');
                }

                resolve({ url: url});
            });
        } else {
            try {
                mkdirp.sync(generatedDir);
            } catch(e) {}

            console.log(`Generating test HTML for ${path.relative(process.cwd(), testsFile)}...`);

            pageTemplate.render(templateData, function(err, html) {
                if (err) {
                    return reject(err);
                }

                fs.writeFileSync(outputFile, html, { encoding: 'utf8' });

                console.log(`Saved test HTML page to ${path.relative(process.cwd(), outputFile)}`);

                resolve({
                    url: outputFile
                });
            });
        }
    });
}


function runTests(options) {
    return generate(options)
        .then((generated) => {
            console.log(`Running ${generated.url} using mocha-phantomjs...`);
            var mochaPhantomJSOptions = { useColors:true };

            if(shouldCover) {
                mochaPhantomJSOptions.hooks = 'mocha-phantomjs-istanbul';
                mochaPhantomJSOptions.coverageFile = getCoverageFile(options.testsFile);
            }

            return spawn(phantomjsBinPath, [mochaPhantomJSCommand, generated.url, 'spec', JSON.stringify(mochaPhantomJSOptions)], {
                stdio: 'inherit'
            });
        });
}

function getCoverageFile(testsFile) {
    return './.nyc_output/'+md5Hex(testsFile)+'.json';
}

exports.generate = generate;
exports.runTests = runTests;
