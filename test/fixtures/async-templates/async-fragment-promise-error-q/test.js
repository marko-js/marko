var deferred = require('raptor-promises').defer();

setTimeout(function() {
    deferred.resolve({});
}, 200);

exports.templateData = {
    promiseData: deferred.promise
};
