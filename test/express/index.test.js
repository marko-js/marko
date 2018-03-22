"use strict";

require("../__util__/test-init");

const chai = require("chai");
chai.config.includeStack = true;
const expect = chai.expect;
const path = require("path");
const autotest = require("../autotest");
const request = require("request");
const fs = require("fs");
const marko = require("marko");
const markoExpressPath = require.resolve("marko/express");
const shell = require("shelljs");
const execSync = require("child_process").execSync;
const resolveFrom = require("resolve-from");
const fixturesDirectory = path.join(__dirname, "./fixtures");

setup();
autotest("versions/express-4/fixtures", run);
autotest("versions/express-5/fixtures", run);

function run({ test, dir, resolve, snapshot }) {
    test(done => {
        var express = require(resolveFrom(dir, "express"));
        var mainPath = resolve("test.js");
        var templatePath = resolve("template.marko");

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
                throw new Error("Error expected");
            }

            main.checkError(e);
            return done();
        } else if (main.createApp) {
            var app = main.createApp(express, markoExpressPath);
            var template = marko.load(templatePath, loadOptions);

            app.get("/test", main.createController(template));

            app.use(function errorHandler(err, req, res, next) {
                if (res.headersSent) {
                    return next(err);
                }

                res.status(500);
                res.end(err.toString());
            });

            var server = app.listen(0, function(err) {
                if (err) {
                    return done(err);
                }

                var port = server.address().port;
                var address = `http://localhost:${port}/test`;

                request(address, function(error, response, body) {
                    try {
                        if (main.checkResponse) {
                            response.body = body;
                            response.error = error;
                            main.checkResponse(response, expect, snapshot);
                        } else {
                            if (error) {
                                return done(error);
                            }
                            chai.expect(response.statusCode).to.equal(200);
                            snapshot(body, ".html");
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
}

function setup() {
    ["express-4", "express-5"].forEach(version => {
        var versionDirectory = path.join(__dirname, "versions", version);
        execSync("npm install", { cwd: versionDirectory });
        shell.cp("-R", fixturesDirectory, versionDirectory);
    });
}
