'use strict';
var chai = require('chai');
chai.Assertion.includeStack = true;
require('chai').should();
var expect = require('chai').expect;
var nodePath = require('path');
var fs = require('fs');

var dust = require('dustjs-linkedin');
dust.onLoad = function(path, callback) {
    if (!fs.existsSync(path)) {
        if (!path.endsWith('.dust')) {
            path += '.dust';
        }
    }

    fs.readFile(path, 'utf-8', callback);
};


require('../dust').registerHelpers(dust);

function testRender(path, data, done, options) {
    options = options || {};

    var inputPath = nodePath.join(__dirname, path);
    var expectedPath = nodePath.join(__dirname, path + '.expected.html');
    var actualPath = nodePath.join(__dirname, path + '.actual.html');

    dust.render(inputPath, data, function(err, output) {
        if (err) {
            return done(err);
        }

        try {
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
        } catch(e) {
            return done(e);
        }
    }); 
}

describe('raptor-templates/dust' , function() {

    beforeEach(function(done) {
        done();
    });

    // it('should compile a simple page template', function() {
    //     testCompiler('test-project/src/pages/page1.rhtml');
    // });

    it('should allow the async-fragment tag to be used inside a Dust template', function(done) {
        var users = {
            "0": {
                name: "John B. Flowers",
                occupation: "Clock repairer",
                gender: "Male"
            },
            "1": {
                name: "Pamela R. Rice",
                occupation: "Cartographer",
                gender: "Female"
            },
            "2": {
                name: "Barbara C. Rigsby",
                occupation: "Enrollment specialist",
                gender: "Female"
            },
            "3": {
                name: "Anthony J. Ward",
                occupation: "Clinical laboratory technologist",
                gender: "Male"
            }
        };

        testRender('test-project/dust/async.dust', {
            userIds: [0, 1, 2, 3],
            userInfo: function(arg, callback) {
                callback(null, users[arg.userId]);
            }
        }, done);
    });

});

