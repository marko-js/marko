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


xdescribe('raptor-widgets/taglib' , function() {

    beforeEach(function(done) {
        // for (var k in require.cache) {
        //     if (require.cache.hasOwnProperty(k)) {
        //         delete require.cache[k];
        //     }
        // }

        // require('raptor-logging').configureLoggers({
        //     'marko': 'INFO'
        // });

        done();
    });

    it('should render a page with a single widget', function(done) {
        require('./test-project/pages/dust').render(function(err, output) {
            if (err) {
                return done(err);
            }

            try {
                console.log('output: ', output);
                done();
            } catch(e) {
                done(e);
            }
        });
    });

});

