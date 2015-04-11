var nodePath = require('path');
var fs = require('fs');

var StringBuilder = require('raptor-strings/StringBuilder');

exports.createTestRender = function(options) {
    var extname = options.ext || '.marko';

    return function testRender(path, data, done, options) {
        var inputPath = nodePath.join(__dirname, path, 'template' + extname);

        var expectedPath = nodePath.join(__dirname, path, 'expected.html');
        var actualPath = nodePath.join(__dirname, path, 'actual.html');
        options = options || {};
        // var compiledPath = nodePath.join(__dirname, path, 'compiled-actual.js');

        // var compiler = require('../compiler').createCompiler(inputPath);
        // var src = fs.readFileSync(inputPath, {encoding: 'utf8'});

        // var compiledSrc = compiler.compile(src);
        // fs.writeFileSync(compiledPath, compiledSrc, {encoding: 'utf8'});


        // console.log('\nCompiled (' + inputPath + '):\n---------\n' + compiledSrc);



        var marko = require('../');

        require('../compiler').defaultOptions.checkUpToDate = false;

        var AsyncWriter = marko.AsyncWriter;
        var out = options.out || new AsyncWriter(new StringBuilder());

        marko.render(inputPath, data, out)
            .on('finish', function() {
                var output = out.getOutput();

                fs.writeFileSync(actualPath, output, {encoding: 'utf8'});

                var expected;
                try {
                    expected = options.expected || fs.readFileSync(expectedPath, {encoding: 'utf8'});
                }
                catch(e) {
                    expected = 'TBD';
                    fs.writeFileSync(expectedPath, expected, {encoding: 'utf8'});
                }

                if (output !== expected) {
                    throw new Error('Unexpected output for "' + inputPath + '":\nEXPECTED (' + expectedPath + '):\n---------\n' + expected +
                        '\n---------\nACTUAL (' + actualPath + '):\n---------\n' + output + '\n---------');
                }

                done();
            })
            .on('error', done)
            .end();

    };
};