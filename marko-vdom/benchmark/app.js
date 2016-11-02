(function() {
    var resultsEl = document.getElementById('results');
    var running = false;
    var benchmarks = {};

    function loadScript(path) {
        return new Promise(function(resolve, reject) {
            var script = document.createElement('script');
            script.src = path;
            script.onload = function () {
                resolve();
            };

            script.onerror = function(e) {
                reject(e);
            };

            document.head.appendChild(script); //or something of the likes
        });
    }

    function loadScripts(paths) {
        return Promise.all(paths.map(function(path) {
            return loadScript(path);
        }));
    }

    function runSuite(suite) {
        return new Promise(function(resolve, reject) {
            if (running) {
                return;
            }

            running = true;

            suite
                .on('start', function(event) {
                    resultsEl.innerHTML += 'Running "' + suite.name + '"...\n';
                })
                .on('cycle', function(event) {
                    resultsEl.innerHTML += String(event.target) + '\n';
                })
                .on('complete', function() {
                    resultsEl.innerHTML += 'Fastest is ' + this.filter('fastest').map('name') + '\n\n--------------\n\n';

                    running = false;

                    suite.off('start cycle complete');
                    resolve();
                })
                .on('error', function(e) {
                    running = false;

                    suite.off('start cycle complete error');
                    reject(e.target.error);
                })
                // run async
                .run({ 'async': true });
        });
    }

    var app = {
        loadScript,
        loadScripts,
        runSuite
    };

    window.registerBenchmark = function(name, func) {
        benchmarks[name] = func(app);
    };

    document.body.addEventListener('click', function(event) {
        if (running) {
            return;
        }
        var target = event.target;
        var benchmarkName = target.getAttribute('data-benchmark');
        if (benchmarkName) {
            var oldButtonLabel = target.innerHTML;
            target.innerHTML = oldButtonLabel + ' - running...';
            resultsEl.innerHTML  = '';

            var benchmarkFunc = benchmarks[benchmarkName];

            benchmarkFunc()
                .then(function() {
                    target.innerHTML = oldButtonLabel;

                    resultsEl.innerHTML += '\nDONE!';
                })
                .catch(function(e) {
                    target.innerHTML = oldButtonLabel;
                    console.error(e);
                    resultsEl.innerHTML = e.toString();
                });
        }
    });
}());
