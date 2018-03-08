var promise = new Promise(function (resolve) {
    setTimeout(function () {
        resolve({});
    }, 100);
});

exports.templateData = {
    promiseData: promise
};