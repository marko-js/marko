exports.templateData = {
    sharedData: function (args, done) {
        var deferred = require('raptor-promises').defer();

        setTimeout(function() {
            deferred.resolve({
                name: 'testSharedData'
            });
        }, 100);

        return deferred.promise;
    },
    contextData: function (args, done) {
        setTimeout(function() {
            done(null, {
                name: "testContextData"
            });
        }, 100);
    }
};
