var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({});
    }, 100);
});

exports.templateData = {
    promiseData: promise
};