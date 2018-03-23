var HTMLElement = require("../../runtime/vdom/HTMLElement");
var Text = require("../../runtime/vdom/Text");
var Comment = require("../../runtime/vdom/Comment");
var DocumentFragment = require("../../runtime/vdom/DocumentFragment");

var resultsEl = document.getElementById("results");
var running = false;
var benchmarks = {};

function loadScript(path) {
    return new Promise(function(resolve, reject) {
        var script = document.createElement("script");
        script.src = path;
        script.onload = function() {
            resolve();
        };

        script.onerror = function(e) {
            reject(e);
        };

        document.head.appendChild(script); //or something of the likes
    });
}

function loadScripts(paths) {
    return Promise.all(
        paths.map(function(path) {
            return loadScript(path);
        })
    );
}

function runSuite(suite) {
    return new Promise(function(resolve, reject) {
        if (running) {
            return;
        }

        running = true;

        suite
            .on("start", function() {
                resultsEl.innerHTML += 'Running "' + suite.name + '"...\n';
            })
            .on("cycle", function(event) {
                resultsEl.innerHTML += String(event.target) + "\n";
            })
            .on("complete", function() {
                resultsEl.innerHTML +=
                    "Fastest is " +
                    this.filter("fastest").map("name") +
                    "\n\n--------------\n\n";

                running = false;

                suite.off("start cycle complete");
                resolve();
            })
            .on("error", function(e) {
                running = false;

                suite.off("start cycle complete error");
                reject(e.target.error);
            })
            // run async
            .run({ async: true });
    });
}

var vdom = (window.MarkoVDOM = {
    virtualize: require("../../runtime/vdom/virtualize"),

    createElement: function(tagName, attrs, childCount, constId) {
        return new HTMLElement(tagName, attrs, childCount, constId);
    },
    createText: function(value) {
        return new Text(value);
    },
    createComment: function(value) {
        return new Comment(value);
    },
    createDocumentFragment: function() {
        return new DocumentFragment();
    }
});

var app = {
    loadScript,
    loadScripts,
    runSuite,
    vdom
};

function registerBenchmark(name, func) {
    benchmarks[name] = func(app);
}

registerBenchmark("create", require("./benchmark-create"));
registerBenchmark("walk", require("./benchmark-walk"));

document.body.addEventListener("click", function(event) {
    if (running) {
        return;
    }
    var target = event.target;
    var benchmarkName = target.getAttribute("data-benchmark");
    if (benchmarkName) {
        var oldButtonLabel = target.innerHTML;
        target.innerHTML = oldButtonLabel + " - running...";
        resultsEl.innerHTML = "";

        var benchmarkFunc = benchmarks[benchmarkName];

        benchmarkFunc()
            .then(function() {
                target.innerHTML = oldButtonLabel;

                resultsEl.innerHTML += "\nDONE!";
            })
            .catch(function(e) {
                target.innerHTML = oldButtonLabel;
                console.error(e);
                resultsEl.innerHTML = e.toString();
            });
    }
});
