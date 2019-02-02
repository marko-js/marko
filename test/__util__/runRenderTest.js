"use strict";

const createBrowser = require("jsdom-context-require");
const defaultDocument = createBrowser({
    dir: __dirname,
    html: "<html><body></body></html>"
}).window.document;

const path = require("path");
const fs = require("fs");
const marko = require("marko");
const fsExtra = require("fs-extra");
const domToHTML = require("./domToHTML");
const domToString = require("./domToString");
const expect = require("chai").expect;
const toDiffableHtml = require("diffable-html");

function createAsyncVerifier(main, snapshot, out) {
    var events = [];
    var eventsByAwaitInstance = {};

    var addEventListener = function(event) {
        out.on(event, function(arg) {
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

    addEventListener("await:begin");
    addEventListener("await:beforeRender");
    addEventListener("await:finish");

    var _flush = out.flush;
    out.flush = function() {
        try {
            out.comment("FLUSH");
        } catch (e) {
            // we may try to flush after the out has ended
            // if this is the case, trying to add a comment
            // will throw an error.  we can safely ignore this
        }
        _flush && _flush.apply(out, arguments);
    };

    return {
        verify() {
            if (main.checkEvents) {
                main.checkEvents(events, snapshot, out);
            }

            // Make sure all of the await instances were correctly ended
            Object.keys(eventsByAwaitInstance).forEach(function(name) {
                var events = eventsByAwaitInstance[name];
                expect(events).to.deep.equal([
                    "await:begin",
                    "await:beforeRender",
                    "await:finish"
                ]);
            });
        }
    };
}

module.exports = function runRenderTest(dir, snapshot, done, options) {
    let output = options.output || "html";

    global.document = defaultDocument;

    let isVDOM = output === "vdom";
    let checkAsyncEvents = options.checkAsyncEvents === true;

    let actualDir;

    require("marko/compiler").configure({
        output,
        autoKeyEnabled: !isVDOM
    });

    if (isVDOM) {
        actualDir = path.join(dir, "../~vdom.skip/" + path.basename(dir));

        fsExtra.removeSync(actualDir);

        fsExtra.copySync(dir, actualDir, {
            filter: function(file) {
                if (
                    file.endsWith(".marko.js") ||
                    file.indexOf(".generated.") !== -1
                ) {
                    return false;
                }
                return true;
            }
        });
    } else {
        actualDir = dir;
    }

    let templatePath = path.join(actualDir, "template.marko");
    let mainPath = path.join(actualDir, "test.js");
    let main = fs.existsSync(mainPath) ? require(mainPath) : {};
    let loadOptions = main && main.loadOptions;

    var oldDone = done;
    done = function(err) {
        require("marko/compiler").configure();

        if (err) {
            return oldDone(err);
        }

        return oldDone();
    };

    var compilerOptions = {
        output: output,
        writeToDisk: main.writeToDisk !== false,
        preserveWhitespace: main.preserveWhitespaceGlobal === true,
        ignoreUnrecognizedTags: main.ignoreUnrecognizedTags === true,
        escapeAtTags: main.escapeAtTags === true,
        autoKeyEnabled: !isVDOM
    };

    require("marko/compiler").configure(compilerOptions);

    try {
        if (main.checkError) {
            let e;

            try {
                marko.load(templatePath, loadOptions);
            } catch (_e) {
                e = _e;
                let errorFile = path.join(actualDir, "error.txt");
                fs.writeFileSync(errorFile, e.stack.toString(), {
                    encoding: "utf8"
                });
            }

            if (!e) {
                throw new Error("Error expected");
            }

            main.checkError(e);
            return done();
        } else {
            let template = marko.load(templatePath, loadOptions);
            let templateData = Object.assign({}, main.templateData || {});

            let out = template.createOut();
            let asyncEventsVerifier;

            if (checkAsyncEvents) {
                asyncEventsVerifier = createAsyncVerifier(main, snapshot, out);
            }

            var verifyOutput = function(result) {
                var renderOutput = result.getOutput();

                if (isVDOM) {
                    var getExpectedHtml = function(callback) {
                        var expectedHtml;
                        try {
                            expectedHtml = fs.readFileSync(
                                path.join(dir, "vdom-expected.html"),
                                { encoding: "utf8" }
                            );
                        } catch (e) {
                            /* ignore error */
                        }

                        if (expectedHtml) {
                            return callback(null, expectedHtml);
                        }

                        require("marko/compiler").configure(
                            Object.assign({}, compilerOptions, {
                                output: "html"
                            })
                        );

                        require("marko/runtime/vdom/AsyncVDOMBuilder").prototype.___document = defaultDocument;
                        global.document = defaultDocument;

                        let expectedHtmlPath = path.join(dir, "expected.html");
                        let html = fs.readFileSync(expectedHtmlPath, "utf-8");
                        let browser = createBrowser({
                            dir: __dirname,
                            html: "<html><body>" + html + "</body></html>"
                        });

                        expectedHtml = domToString(
                            browser.window.document.body,
                            { childrenOnly: true }
                        );

                        process.nextTick(function() {
                            callback(null, expectedHtml);
                        });
                    };

                    getExpectedHtml(function(err, expectedHtml) {
                        if (err) {
                            return done(err);
                        }

                        fs.writeFileSync(
                            path.join(dir, "vdom-expected.generated.html"),
                            expectedHtml,
                            { encoding: "utf8" }
                        );

                        // let actualizedDom = vdomTree.actualize(defaultDocument);

                        // NOTE: We serialie the virtual DOM tree into an HTML string and reparse so that we can
                        //       normalize the text
                        let actualNode = result.getNode();

                        let vdomHtml = domToHTML(actualNode);

                        let browser = createBrowser({
                            dir: __dirname,
                            html: "<html><body>" + vdomHtml + "</body></html>"
                        });
                        let vdomString = domToString(
                            browser.window.document.body,
                            { childrenOnly: true }
                        );
                        snapshot(vdomString, {
                            name: "vdom",
                            ext: ".generated.html"
                        });

                        if (checkAsyncEvents) {
                            asyncEventsVerifier.verify();
                        }

                        done();
                    });
                } else {
                    let html = renderOutput;
                    if (main.checkHtml) {
                        fs.writeFileSync(path.join(dir, "actual.html"), html, {
                            encoding: "utf8"
                        });
                        main.checkHtml(html);
                    } else {
                        snapshot(html, {
                            ext: ".html",
                            format: toDiffableHtml
                        });
                    }

                    if (checkAsyncEvents) {
                        asyncEventsVerifier.verify();
                    }

                    done();
                }
            };

            out.then(
                function onFulfilled(result) {
                    process.nextTick(function() {
                        verifyOutput(result);
                    });
                },
                function onRejected(err) {
                    process.nextTick(function() {
                        done(err);
                    });
                }
            );

            template.render(templateData, out).end();
        }
    } finally {
        require("marko/compiler").configure();
    }
};
