'use strict';

const jsdom = require("jsdom").jsdom;
const defaultDocument = jsdom('<html><body></body></html>');

const path = require('path');
const fs = require('fs');
const marko = require('marko');
const fsExtra = require('fs-extra');
const domToHTML = require('./domToHTML');
const domToString = require('./domToString');
const expect = require('chai').expect;

function createAsyncVerifier(main, helpers, out) {
    var events = [];
    var eventsByAwaitInstance = {};

    var addEventListener = function (event) {
        out.on(event, function (arg) {
            var name = arg.name;

            if (!eventsByAwaitInstance[name]) {
                eventsByAwaitInstance[name] = [];
            }

            eventsByAwaitInstance[name].push(event);

            events.push({
                event: event,
                arg: Object.assign({}, arg)
            });
        });
    };

    addEventListener('await:begin');
    addEventListener('await:beforeRender');
    addEventListener('await:finish');

    return {
        verify() {
            if (main.checkEvents) {
                main.checkEvents(events, helpers, out);
            }

            // Make sure all of the await instances were correctly ended
            Object.keys(eventsByAwaitInstance).forEach(function (name) {
                var events = eventsByAwaitInstance[name];
                expect(events).to.deep.equal(['await:begin', 'await:beforeRender', 'await:finish']);
            });
        }
    };
}

module.exports = function runRenderTest(dir, helpers, done, options) {
    let output = options.output || 'html';

    global.document = defaultDocument;

    let isVDOM = output === 'vdom';
    let checkAsyncEvents = options.checkAsyncEvents === true;

    let actualDir;

    require('marko/compiler').configure({
        output,
        autoKeyEnabled: false
    });

    if (isVDOM) {
        actualDir = path.join(dir, '../~vdom.skip/' + path.basename(dir));

        fsExtra.removeSync(actualDir);

        fsExtra.copySync(dir, actualDir, {
            filter: function (file) {
                if (file.endsWith('.marko.js') || file.indexOf('.generated.') !== -1) {
                    return false;
                }
                return true;
            }
        });
    } else {
        actualDir = dir;
    }

    let templatePath = path.join(actualDir, 'template.marko');
    let mainPath = path.join(actualDir, 'test.js');
    let main = fs.existsSync(mainPath) ? require(mainPath) : {};
    let loadOptions = main && main.loadOptions;

    if (isVDOM && main.vdomSkip) {
        return done();
    }

    var compilerOptions = {
        output: output,
        writeToDisk: main.writeToDisk !== false,
        preserveWhitespace: main.preserveWhitespaceGlobal === true,
        ignoreUnrecognizedTags: main.ignoreUnrecognizedTags === true,
        escapeAtTags: main.escapeAtTags === true,
        autoKeyEnabled: false
    };

    require('marko/compiler').configure(compilerOptions);

    var oldDone = done;
    done = function (err) {
        require('marko/compiler').configure();

        if (err) {
            return oldDone(err);
        }

        return oldDone();
    };

    try {
        if (main.checkError) {
            let e;

            try {
                marko.load(templatePath, loadOptions);
            } catch (_e) {
                e = _e;
                let errorFile = path.join(actualDir, 'error.txt');
                fs.writeFileSync(errorFile, e.stack.toString(), { encoding: 'utf8' });
            }

            if (!e) {
                throw new Error('Error expected');
            }

            main.checkError(e);
            return done();
        } else {
            let template = marko.load(templatePath, loadOptions);
            let templateData = Object.assign({}, main.templateData || {});

            let out = template.createOut();
            let asyncEventsVerifier;

            if (checkAsyncEvents) {
                asyncEventsVerifier = createAsyncVerifier(main, helpers, out);
            }

            var verifyOutput = function (result) {
                var renderOutput = result.getOutput();

                if (isVDOM) {
                    var getExpectedHtml = function (callback) {
                        var expectedHtml;
                        try {
                            expectedHtml = fs.readFileSync(path.join(dir, 'vdom-expected.html'), { encoding: 'utf8' });
                        } catch (e) {}

                        if (expectedHtml) {
                            return callback(null, expectedHtml);
                        }

                        require('marko/compiler').configure(Object.assign({}, compilerOptions, { output: 'html' }));

                        require('marko/runtime/vdom/AsyncVDOMBuilder').prototype.___document = defaultDocument;
                        global.document = defaultDocument;

                        let htmlTemplatePath = path.join(dir, 'template.marko');
                        let htmlTemplate = marko.load(htmlTemplatePath);
                        let htmlMainPath = path.join(dir, 'test.js');
                        let htmlMain = fs.existsSync(htmlMainPath) ? require(htmlMainPath) : {};

                        htmlTemplate.render(htmlMain.templateData || {}, function (err, html) {
                            if (err) {
                                return callback(err);
                            }

                            let document = jsdom('<html><body>' + html + '</body></html>');
                            let expectedHtml = domToString(document.body, { childrenOnly: true });

                            process.nextTick(function () {
                                callback(null, expectedHtml);
                            });
                        });
                    };

                    getExpectedHtml(function (err, expectedHtml) {
                        if (err) {
                            return done(err);
                        }

                        fs.writeFileSync(path.join(dir, 'vdom-expected.generated.html'), expectedHtml, { encoding: 'utf8' });

                        // let actualizedDom = vdomTree.actualize(defaultDocument);

                        // NOTE: We serialie the virtual DOM tree into an HTML string and reparse so that we can
                        //       normalize the text
                        let actualNode = result.getNode();

                        let vdomHtml = domToHTML(actualNode);

                        let vdomRealDocument = jsdom('<html><body>' + vdomHtml + '</body></html>');
                        let vdomString = domToString(vdomRealDocument.body, { childrenOnly: true });
                        helpers.compare(vdomString, 'vdom-', '.generated.html');

                        if (checkAsyncEvents) {
                            asyncEventsVerifier.verify();
                        }

                        done();
                    });
                } else {
                    let html = renderOutput;
                    if (main.checkHtml) {
                        fs.writeFileSync(path.join(dir, 'actual.html'), html, { encoding: 'utf8' });
                        main.checkHtml(html);
                    } else {
                        helpers.compare(html, '.html');
                    }

                    if (checkAsyncEvents) {
                        asyncEventsVerifier.verify();
                    }

                    done();
                }
            };

            out.then(function onFulfilled(result) {
                process.nextTick(function () {
                    verifyOutput(result);
                });
            }, function onRejected(err) {
                process.nextTick(function () {
                    done(err);
                });
            });

            template.render(templateData, out).end();
        }
    } finally {
        require('marko/compiler').configure();
    }
};