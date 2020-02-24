const { callbackProvider } = require("../../../__util__/async-helpers");

exports.tests = [
    {
        templateData: {
            D1: callbackProvider(2),
            D2: callbackProvider(4),
            D3: callbackProvider(3),
            D4: callbackProvider(5),
            D5: callbackProvider(6),
            D6: callbackProvider(2),
            D7: callbackProvider(1)
        },
        expectedFile: require.resolve("./expected.html")
    },
    {
        templateData: {
            D1: callbackProvider(1),
            D2: callbackProvider(3),
            D3: callbackProvider(2),
            D4: callbackProvider(4),
            D5: callbackProvider(5),
            D6: callbackProvider(1),
            D7: callbackProvider(2)
        },
        expectedFile: require.resolve("./expected.html")
    },
    {
        templateData: {
            D1: callbackProvider(5),
            D2: callbackProvider(3),
            D3: callbackProvider(2),
            D4: callbackProvider(4),
            D5: callbackProvider(1),
            D6: callbackProvider(1),
            D7: callbackProvider(2)
        },
        expectedFile: require.resolve("./expected.html")
    }
];
