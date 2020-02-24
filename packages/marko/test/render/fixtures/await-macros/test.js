exports.tests = [
    {
        templateData: {
            D1: Promise.resolve()
        },
        expectedFile: require.resolve("./expected.html")
    }
];
