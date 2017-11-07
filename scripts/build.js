'use strict';
const fs = require('fs');
const path = require('path');
const buildDir = require('./util').buildDir;
const babelOptions = {
    "plugins": [
        [
            "minprops", {
                "matchPrefix": "___",
                "prefix": "",
                "suffix": "_",
                "hello": "world",
                "context": "marko"
            }
        ],
        require.resolve('./babel-plugin-marko-debug')
    ]
};


var target = process.argv[2];

var shouldBuildSrc = true;
var shouldBuildTest = true;

if (target === 'src') {
    shouldBuildTest = false;
}

if (shouldBuildSrc) {
    buildDir('src', 'dist', {
        babelExclude: [
            '/taglibs/async/client-reorder-runtime.min.js'
        ],
        babelOptions
    });
}

fs.writeFileSync(
    path.join(__dirname, '../dist/build.json'),
    JSON.stringify({ isDebug: false }, null, 4),
    { encoding: 'utf8' });

if (shouldBuildTest) {
    buildDir('test', 'test-dist', {
        babelExclude: [
            '*expected*.*',
            'input.js*'
        ],
        exclude: [
            '/generated',
            '*.marko.js',
            '*.skip',
            '*.generated.*',
            '*actual*.*',
            'actualized-expected.html*'
        ],
        babelOptions
    });
}
