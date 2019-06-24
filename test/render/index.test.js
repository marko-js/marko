"use strict";

require("../__util__/test-init");

const fs = require("fs");
const path = require("path");
const marko = require("marko");
const autotest = require("../autotest");
const domToString = require("../__util__/domToString");
const createBrowserWithMarko = require("../__util__/create-marko-jsdom-module");
const expect = require("chai").expect;
const toDiffableHtml = require("diffable-html");
const browser = createBrowserWithMarko(__dirname, "<html><body></body></html>");

autotest("fixtures", {
    html: testRunner,
    vdom: testRunner,
    "html ≅ vdom": compareNormalized
});

autotest("fixtures-deprecated", {
    html: testRunner,
    vdom: testRunner,
    "html ≅ vdom": compareNormalized
});

autotest("fixtures-async", {
    html: testRunnerAsync,
    vdom: testRunnerAsync,
    "html ≅ vdom": compareNormalized
});

autotest("fixtures-async-deprecated", {
    html: testRunnerAsync,
    vdom: testRunnerAsync,
    "html ≅ vdom": compareNormalized
});

function testRunner(fixture) {
    fixture.test(done => runRenderTest(fixture, done, false));
}

function testRunnerAsync(fixture) {
    fixture.test(done => runRenderTest(fixture, done, true));
}

function compareNormalized({ test, context }) {
    test(function() {
        if (
            !context.hasOwnProperty("html") ||
            !context.hasOwnProperty("vdom")
        ) {
            this.skip();
        } else {
            expect(context.html).to.equal(context.vdom);
        }
    });
}

function runRenderTest(fixture, done, checkAsyncEvents) {
    let dir = fixture.dir;
    let output = fixture.mode;
    let snapshot = fixture.snapshot;
    let isVDOM = output === "vdom";

    let templatePath = path.join(dir, "template.marko");
    let mainPath = path.join(dir, "test.js");
    let main = !fs.existsSync(mainPath)
        ? {}
        : isVDOM
        ? browser.require(mainPath)
        : require(mainPath);
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
        ignoreUnrecognizedTags: main.ignoreUnrecognizedTags === true
    };

    require("marko/compiler").configure(compilerOptions);

    try {
        if (main.checkError) {
            let e;

            try {
                isVDOM
                    ? browser.require(templatePath)
                    : marko.load(templatePath, loadOptions);
            } catch (_e) {
                e = _e;
                let errorFile = path.join(dir, "error.txt");
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
            let template = isVDOM
                ? browser.require(templatePath)
                : marko.load(templatePath, loadOptions);
            let templateData = Object.assign({}, main.templateData || {});

            let out = template.createOut();
            let asyncEventsVerifier;

            if (checkAsyncEvents) {
                asyncEventsVerifier = createAsyncVerifier(main, snapshot, out);
            }

            var verifyOutput = function(result) {
                if (isVDOM) {
                    let actualNode = result.getNode();
                    actualNode.normalize();
                    let vdomString = domToString(actualNode, {
                        childrenOnly: true
                    });

                    snapshot(vdomString, {
                        name: "vdom",
                        ext: ".html"
                    });

                    fixture.context.vdom = normalizeHtml(actualNode);
                } else {
                    let html = result.getOutput();
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

                    fixture.context.html = normalizeHtml(html);
                }

                if (checkAsyncEvents) {
                    asyncEventsVerifier.verify();
                }

                done();
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
}

function normalizeHtml(htmlOrNode) {
    let document = browser.window.document;

    if (typeof htmlOrNode === "string") {
        document.open();
        document.write(htmlOrNode);
        document.close();
    } else {
        document.documentElement.innerHTML = "";
        document.body.appendChild(htmlOrNode);
    }

    const treeWalker = document.createTreeWalker(document.body);
    const nodesToRemove = [];

    while (treeWalker.nextNode()) {
        const node = treeWalker.currentNode;
        if (
            node.nodeType === 8 ||
            isIgnoredTag(node) ||
            isClientReorderFragment(node)
        ) {
            nodesToRemove.push(node);
        } else if (node.tagName === "TEXTAREA") {
            node.textContent = node.value;
        }
    }

    nodesToRemove.forEach(n => n.remove());
    document.body.innerHTML = document.body.innerHTML;
    document.body.normalize();

    return document.body.innerHTML.trim();
}

function isIgnoredTag(node) {
    switch (node.tagName) {
        case "LINK":
        case "TITLE":
        case "STYLE":
        case "SCRIPT":
            return true;
        default:
            return false;
    }
}

function isClientReorderFragment(node) {
    return /^af\d+$/.test(node.id);
}

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
