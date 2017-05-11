'use strict';
require('./util/test-init');

var chai = require('chai');
chai.config.includeStack = true;
var path = require('path');
var marko = require('marko');
var autotest = require('./autotest');
var express = require('express');
var request = require('request');
var fs = require('fs');

var markoExpressPath = require.resolve('marko/express');

require('marko/node-require').install();

describe('express', function() {
    var autoTestDir = path.join(__dirname, 'autotests/express');

    describe('registration', function() {
        it('should not register the res.marko function multiple times', function() {
            require(markoExpressPath);

            var fn = express.response.marko;

            require(markoExpressPath);

            chai.expect(express.response.marko).to.equal(fn);
        });
        it('should be able to register for multiple express instances', function() {
            // test res.marko is added to the real express response
            require(markoExpressPath);
            chai.expect(express.response.marko).to.be.a('function');

            // set up an express mock object and hijack require
            var expressMock = { response:{} };
            var _require = module.require;

            module.require = function() {
                if(arguments[0] === 'express') return expressMock;
                return _require.apply(module, arguments);
            };

            // check that res.marko is added to the mocked express response
            require(markoExpressPath);
            chai.expect(expressMock.response.marko).to.be.a('function');

            // return require to its original state
            module.require = _require;
        });
    })

    autotest.scanDir(
        autoTestDir,
        function run(dir, helpers, done) {
            var mainPath = path.join(dir, 'test.js');
            var templatePath = path.join(dir, 'template.marko');

            var main = fs.existsSync(mainPath) ? require(mainPath) : {};
            var loadOptions = main && main.loadOptions;

            if (main.checkError) {
                var e;

                try {
                    main.createApp(express);
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

                app.use(function errorHandler (err, req, res, next) {
                    if (res.headersSent) {
                        return next(err);
                    }

                    res.status(500);
                    res.end(err.toString());
                });

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
