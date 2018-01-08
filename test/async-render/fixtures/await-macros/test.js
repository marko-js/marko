function delayedDataProvider(delay, value) {
    return function (args, done) {
        setTimeout(function () {
            done(null, value);
        }, delay);
    };
}

exports.tests = [{
    templateData: {
        'D1': delayedDataProvider(100)
    },
    expectedFile: require.resolve('./expected.html')
}];