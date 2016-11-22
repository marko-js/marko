require('../util/patch-module');

require('marko/node-require').install();
var path = require('path');
var fs = require('fs');
var runner = require('./');

var options = require('argly').createParser({
        '--automated': 'boolean',
        '--server': 'boolean',
        '--tests-file *': 'string',
        '--page': 'string',
        '--pages': 'string[]'
    })
    .parse();

if (options.testsFile) {
    options.testsFile = path.resolve(process.cwd(), options.testsFile);
}

function populatePageOptions(pageName) {
    var pageDir = path.join(__dirname, '../autotests/widgets-pages', pageName);
    var pageTemplate = path.join(pageDir, 'template.marko');
    options.pageTemplate = require(pageTemplate);
    options.generatedDir = './page-' + pageName;
    options.testsFile = path.join(pageDir, 'tests.js');
}

if (options.page) {
    populatePageOptions(options.page);
}

function go() {
    if (options.automated) {
        return runner.runTests(options);
    } else {
        return runner.generate(options);
    }
}

if (options.pages) {
    var pageNames = fs.readdirSync(path.resolve(__dirname, '../autotests/widgets-pages'));
    var promise = pageNames.reduce(function(previousValue, pageName) {
        return previousValue
            .then(() => {
                console.log('Running tests for page ' + pageName + '...');
                populatePageOptions(pageName);
                return go();
            });
    }, Promise.resolve());

    promise
        .then((result) => {
            process.exit(0);
        })
        .catch((err) => {
            if (err.code !== 1) {
                console.error(err.stack || err);
            }

            process.exit(1);
        });
} else {
    go()
        .then((result) => {
            if (!options.server) {
                process.exit(0);
            }
        })
        .catch((err) => {
            if (err.code !== 1) {
                console.error(err.stack || err);
            }

            process.exit(1);
        });
}


