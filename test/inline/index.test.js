'use strict';

require('../__util__/test-init');

var chai = require('chai');
chai.config.includeStack = true;
var path = require('path');
var compiler = require('../../compiler');
var autotest = require('../autotest');
var fs = require('fs');

describe('inline', function () {
    var autoTestDir = path.join(__dirname, './fixtures');

    autotest.scanDir(autoTestDir, function run(dir, helpers, done) {
        var indexPath = path.join(dir, 'index.js');
        var inlineCompiler = compiler.createInlineCompiler(indexPath);

        var compilerOptions = { writeVersionComment: false };
        var src = fs.readFileSync(indexPath, { encoding: 'utf8' });

        src = src.replace(/marko`([^`]*)`/g, function (match, templateSrc) {
            var compiled = inlineCompiler.compile(templateSrc, compilerOptions);
            return compiled.code;
        });

        var staticCode = inlineCompiler.staticCode;

        if (staticCode) {
            src = staticCode + '\n\n' + src;
        }

        var outputFile = path.join(dir, 'index.generated.js');
        fs.writeFileSync(outputFile, src, { encoding: 'utf8' });

        var func = require(outputFile);

        function handleOutput(result) {
            helpers.compare(result.toString(), '.html');
            done();
        }

        if (func.length === 1) {
            func((err, result) => {
                if (err) {
                    return done(err);
                }

                handleOutput(result);
            });
        } else {
            let result = func();
            handleOutput(result);
        }
    });
});
