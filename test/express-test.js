'use strict';
require('./patch-module');

var chai = require('chai');
chai.config.includeStack = true;
var path = require('path');
var marko = require('../');
var autotest = require('./autotest');
var express = require('express');
var request = require('request');
var fs = require('fs');

require('../node-require').install();

describe('render', function() {
    var autoTestDir = path.join(__dirname, 'autotests/express');

    autotest.scanDir(
        autoTestDir,
        function run(dir, helpers, done) {
            var mainPath = path.join(dir, 'test.js');
            var templatePath = path.join(dir, 'template.marko');
            var markoExpressPath = require.resolve('../express');

            var main = fs.existsSync(mainPath) ? require(mainPath) : {};
            var loadOptions = main && main.loadOptions;

            if (main.checkError) {
                var e;

                try {
                    main.createApp(express, markoExpress);
                } catch(_e) {
                    e = _e;
                }

                if (!e) {
                    throw new Error('Error expected');
                }

                main.checkError(e);
                return done();
            } else {
                var app = main.createApp(express, markoExpressPath);
                var template = marko.load(templatePath, loadOptions);

                app.get('/test', main.createController(template));

                var server = app.listen(0, function(err) {
                    if(err) {
                        return done(err);
                    }

                    var port = server.address().port;
                    var address = `http://localhost:${port}/test`;

                    request(address, function(error, response, body) {
                        try {
                            if(main.checkResponse) {
                                response.body = body;
                                response.error = error;
                                main.checkResponse(response, chai.expect, helpers);
                            } else {
                                if(error) {
                                    return done(error);
                                }
                                chai.expect(response.statusCode).to.equal(200);
                                helpers.compare(body, '.html');
                            }
                        } catch(error) {
                            server.close();
                            throw error;
                        }

                        server.close();
                        done();
                    });
                });
            }
        });
});
