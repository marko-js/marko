function delayedDataProvider(delay, value) {
    return function (args, done) {
        setTimeout(function () {
            done(null, value);
        }, delay);
    };
}

exports.tests = [{
    templateData: {
        'D1': delayedDataProvider(100),
        'D2': delayedDataProvider(300),
        'D3': delayedDataProvider(200),
        'D4': delayedDataProvider(800)
    },
    expectedFile: require.resolve('./expected.html')
}, {
    templateData: {
        'D1': delayedDataProvider(100),
        'D2': delayedDataProvider(200),
        'D3': delayedDataProvider(300),
        'D4': delayedDataProvider(150)
    },
    expectedFile: require.resolve('./expected.html')
}, {
    templateData: {
        'D1': delayedDataProvider(800),
        'D2': delayedDataProvider(200),
        'D3': delayedDataProvider(300),
        'D4': delayedDataProvider(100)
    },
    expectedFile: require.resolve('./expected.html')
}, {
    templateData: {
        'D1': delayedDataProvider(800),
        'D2': delayedDataProvider(300),
        'D3': delayedDataProvider(200),
        'D4': delayedDataProvider(100)
    },
    expectedFile: require.resolve('./expected.html')
}];