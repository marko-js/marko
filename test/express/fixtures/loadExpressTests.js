'use strict';

require('../../__util__/test-init');

const chai = require('chai');
chai.config.includeStack = true;
const expect = chai.expect;
const path = require('path');
const autotest = require('../../autotest');
const request = require('request');
const fs = require('fs');
const marko = require('../../../');
const markoExpressPath = require.resolve('../../../express');
const shell = require('shelljs');
const execSync = require('child_process').execSync;
const resolveFrom = require('resolve-from');

require('../../../node-require').install();

const autoTestDirSrc = path.join(__dirname, './autotests');

module.exports = function loadExpressTests(expressVersion) {
    const projectDir = path.join(__dirname, expressVersion);
    // Run `npm install` to install express
    execSync('npm install', { cwd: projectDir });

    // Load the installed express
    let express = require(resolveFrom(projectDir, 'express'));

    // Copy the autotests directory into the target project
    shell.cp('-R', autoTestDirSrc, projectDir);

    autotest.scanDir(path.join(projectDir, 'autotests'), function run(dir, helpers, done) {
        var mainPath = path.join(dir, 'test.js');
        var templatePath = path.join(dir, 'template.marko');

        var main = fs.existsSync(mainPath) ? require(mainPath) : {};
        var loadOptions = main && main.loadOptions;

        if (main.checkError) {
            var e;

            try {
                main.createApp(express);
            } catch (_e) {
                e = _e;
            }

            if (!e) {
                throw new Error('Error expected');
            }

            main.checkError(e);
            return done();
        } else if (main.createApp) {
            var app = main.createApp(express, markoExpressPath);
            var template = marko.load(templatePath, loadOptions);

            app.get('/test', main.createController(template));

            app.use(function errorHandler(err, req, res, next) {
                if (res.headersSent) {
                    return next(err);
                }

                res.status(500);
                res.end(err.toString());
            });

            var server = app.listen(0, function (err) {
                if (err) {
                    return done(err);
                }

                var port = server.address().port;
                var address = `http://localhost:${port}/test`;

                request(address, function (error, response, body) {
                    try {
                        if (main.checkResponse) {
                            response.body = body;
                            response.error = error;
                            main.checkResponse(response, expect, helpers);
                        } else {
                            if (error) {
                                return done(error);
                            }
                            chai.expect(response.statusCode).to.equal(200);
                            helpers.compare(body, '.html');
                        }
                    } catch (error) {
                        server.close();
                        throw error;
                    }

                    server.close();
                    done();
                });
            });
        } else {
            main.test(done);
        }
    });
};
