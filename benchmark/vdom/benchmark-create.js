module.exports = function(app) {
    var Suite = window.Benchmark.Suite;

    var names = [
        'dom',
        'dom-innerHTML',
        'marko-vdom',
        'react'
    ];

    var htmlFiles = ['todomvc', 'marko-docs', 'tabs'];

    function loadScripts() {

        window.createBenchmarks = {};

        var scripts = [];

        names.forEach(function(name) {
            htmlFiles.forEach(function(htmlFile) {
                scripts.push('./codegen-create/benchmark-' + htmlFile + '-' + name + '.js');
            });
        });

        return app.loadScripts(scripts);
    }

    function runForHtmlFile(htmlFile) {
        return loadScripts(htmlFile)
            .then(function() {
                var suite = new Suite('create-' + htmlFile);

                names.forEach(function(name) {
                    suite.add(name, function() {
                        return window.createBenchmarks[htmlFile + '-' + name]();
                    });
                });

                return app.runSuite(suite);
            });
    }

    var loadScriptsPromise = loadScripts();

    return function() {
        var promiseChain = loadScriptsPromise;

        htmlFiles.forEach(function(htmlFile) {
            promiseChain = promiseChain.then(function() {
                return runForHtmlFile(htmlFile);
            });
        });

        return promiseChain;
    };
};
