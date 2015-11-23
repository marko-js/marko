var deferred = require('raptor-promises').defer();
setTimeout(function() {
    deferred.resolve('Test promise');
}, 200);

exports.templateData = {
    promiseData: function (arg, done) {
        return deferred.promise;
    }
};
