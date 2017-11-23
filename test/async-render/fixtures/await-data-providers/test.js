exports.templateData = {
    sharedData: function (args, done) {
        return new Promise(function (resolve, reject) {
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