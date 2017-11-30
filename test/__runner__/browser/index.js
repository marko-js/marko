var path = require('path');

require('require-self-ref');
require('../../../node-require').install();
require('../../../express');

require('../../../compiler').configure({
    assumeUpToDate: false
});

var JSDOM = require('jsdom-global');
var express = require('express');
var lasso = require('lasso');
var defaultPageTemplate = require('./page-template.marko');
var fs = require('fs');
var mkdirp = require('mkdirp');
var md5Hex = require('md5-hex');
var ok = require('assert').ok;
var shouldCover = !!process.env.NYC_CONFIG;

function generate(options) {
    return new Promise((resolve, reject) => {
        var testsFile = options.testsFile;
        var startServer = options.server === true;
        var pageTemplate = options.pageTemplate || defaultPageTemplate;
        var generatedDir = options.generatedDir;
        ok(generatedDir, '"options.generatedDir" is required');

        var outputFile = path.join(generatedDir, 'test.html');

        var browserDependencies = ["mocha/mocha.js", "mocha/mocha.css", "require-run: " + require.resolve('./mocha-setup'), 'require-run: ' + testsFile, "require: jquery", {
            "require-run": require.resolve('./mocha-run'),
            "slot": "mocha-run"
        }];

        var lassoConfig = {
            outputDir: path.join(generatedDir, 'static'),
            urlPrefix: startServer ? '/static' : './static',
            bundlingEnabled: false,
            fingerprintsEnabled: false,
            minify: false,
            plugins: [{
                plugin: 'lasso-marko',
                config: {
                    output: 'vdom'
                }
            }, require('./lasso-autotest-plugin')]
        };

        if (shouldCover) {
            lassoConfig.plugins.push(require('./lasso-istanbul-plugin'));
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
            app.get('/', function (req, res) {
                res.marko(pageTemplate, templateData);
            });

            var port = 8080;

            var server = app.listen(port, function (err) {
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

                resolve({ url: url });
            });
        } else {
            try {
                mkdirp.sync(generatedDir);
            } catch (e) {}

            pageTemplate.render(templateData, function (err, html) {
                if (err) {
                    return reject(err);
                }

                fs.writeFileSync(outputFile, html, { encoding: 'utf8' });

                resolve({
                    url: outputFile
                });
            });
        }
    });
}

function runTests(options) {
    return generate(options).then(generated => {
        return new Promise(function (resolve, reject) {
            fs.readFile(generated.url, 'utf-8', function (err, html) {
                if (err) {
                    return reject(err)
                }

                var cleanup = JSDOM(html, {
                    url: 'file://' + generated.url,
                    features: {
                        FetchExternalResources: ["script", "iframe", "link"]
                    }
                });
                window.addEventListener('error', function (ev) {
                    reject(ev.error);
                });
                window.addEventListener('load', function () {
                    var runner = window.MOCHA_RUNNER;
                    runner.on('end', function () {
                        if (shouldCover) {
                            var coverageFile = getCoverageFile(options.testsFile);
                            fs.writeFileSync(coverageFile, JSON.stringify(window.__coverage__));
                        }
    
                        cleanup();

                        runner.stats.failures.length
                            ? reject(new Error(runner.stats.failures.join(', ')))
                            : resolve();
                    });
                });
            })
        })
    });
}

function getCoverageFile(testsFile) {
    return './.nyc_output/'+md5Hex(testsFile)+'.json';
}

exports.generate = generate;
exports.runTests = runTests;
