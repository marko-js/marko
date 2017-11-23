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
        'D4': delayedDataProvider(800),
        'D5': delayedDataProvider(900),
        'D6': delayedDataProvider(100),
        'D7': delayedDataProvider(50)
    },
    expectedFile: require.resolve('./expected.html')
}, {
    templateData: {
        'D1': delayedDataProvider(100),
        'D2': delayedDataProvider(300),
        'D3': delayedDataProvider(200),
        'D4': delayedDataProvider(800),
        'D5': delayedDataProvider(900),
        'D6': delayedDataProvider(100),
        'D7': delayedDataProvider(200)
    },
    expectedFile: require.resolve('./expected.html')
}, {
    templateData: {
        'D1': delayedDataProvider(900),
        'D2': delayedDataProvider(300),
        'D3': delayedDataProvider(200),
        'D4': delayedDataProvider(800),
        'D5': delayedDataProvider(100),
        'D6': delayedDataProvider(100),
        'D7': delayedDataProvider(200)
    },
    expectedFile: require.resolve('./expected.html')
}];