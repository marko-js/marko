exports.templateData = {
    sharedData: function () {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve({
                    name: 'testSharedData'
                });
            }, 100);
        });
    },
    contextData: function (args, done) {
        setTimeout(function () {
            done(null, {
                name: "testContextData"
            });
        }, 100);
    }
};