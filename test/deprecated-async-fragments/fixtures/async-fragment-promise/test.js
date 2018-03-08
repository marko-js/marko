exports.templateData = {
    promiseData: function () {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve('Test promise');
            }, 100);
        });
    }
};