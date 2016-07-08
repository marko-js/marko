require('../util/patch-module');
require('marko/node-require').install();
require('marko/express');

var express = require('express');
var lasso = require('lasso');
var path = require('path');
var defaultGeneratedDir = path.join(__dirname, '../generated');
var defaultPageTemplate = require('./page-template.marko');
var spawn = require('child-process-promise').spawn;
var fs = require('fs');
var mkdirp = require('mkdirp');
var mochaPhantomJSCommand = path.join(__dirname, '../../node_modules/.bin/mocha-phantomjs');

function generate(options) {
    return new Promise((resolve, reject) => {
        var testsFile = options.testsFile;
        var startServer = options.server === true;
        var pageTemplate = options.pageTemplate || defaultPageTemplate;
        var generatedDir = options.generatedDir;
        if (generatedDir) {
            generatedDir = path.resolve(defaultGeneratedDir, options.generatedDir);
        } else {
            generatedDir = defaultGeneratedDir;
        }

        var outputFile = path.join(generatedDir, 'test.html');

        var browserDependencies = [
            "mocha/mocha.js",
            "mocha/mocha.css",
            "require-run: " + require.resolve('./mocha-setup'),
            'require-run: ' + testsFile,
            "require: jquery",
            "require: marko-widgets",
            {
                "require-run": require.resolve('./mocha-run'),
                "slot": "mocha-run"
            }
        ];

        var myLasso = lasso.create({
            outputDir: path.join(generatedDir, 'static'),
            urlPrefix: startServer ? '/static' : './static',
            bundlingEnabled: false,
            fingerprintsEnabled: false,
            minify: false,
            plugins: [
                'lasso-marko',
                require('./lasso-autotest-plugin')
            ]
        });

        var templateData = {
            lasso: myLasso,
            browserDependencies: browserDependencies
        };

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
            return spawn(mochaPhantomJSCommand, [generated.url], {
                stdio: 'inherit'
            });
        });
}

exports.generate = generate;
exports.runTests = runTests;


