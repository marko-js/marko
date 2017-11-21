const path = require('path');
const rootDir = path.join(__dirname, '../../');
const env = require(path.join(rootDir, 'env'));

var testDir = path.join(rootDir, env.isDebug ? 'test' : 'test-dist');
process.env.TEST_DIR = testDir;

require(path.join(testDir, 'util/patch-module'));

require('marko/node-require').install();

var fs = require('fs');
var runner = require('./');

var options = require('argly').createParser({
        '--automated': 'boolean',
        '--server': 'boolean',
        '--tests-file *': 'string',
        '--page': 'string',
        '--pages': 'boolean',
        '--deprecated': 'boolean'
    })
    .parse();


if (options.testsFile) {
    options.testsFile = path.resolve(testDir, options.testsFile);
}

var generatedDir = options.generatedDir = path.join(testDir, 'generated');

function populatePageOptions(pageName) {
    var pagesPath =  path.join(testDir, 'autotests', options.deprecated ? 'components-pages-deprecated' : 'components-pages');
    var pageDir = path.join(pagesPath, pageName);
    var pageTemplate = path.join(pageDir, 'template.marko');
    options.pageTemplate = require(pageTemplate);
    options.generatedDir = path.join(generatedDir, 'page-' + pageName);
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
    var pagesPath = path.join(testDir, 'autotests', options.deprecated ? 'components-pages-deprecated' : 'components-pages');
    var pageNames = fs.readdirSync(pagesPath);
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
