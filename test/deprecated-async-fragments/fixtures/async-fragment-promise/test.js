exports.templateData = {
    promiseData: function (arg, done) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve('Test promise');
            }, 100);
        });
    }
};