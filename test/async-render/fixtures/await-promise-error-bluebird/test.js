var deferred = require('bluebird').defer();

setTimeout(function () {
    deferred.resolve({});
}, 200);

exports.templateData = {
    promiseData: deferred.promise
};