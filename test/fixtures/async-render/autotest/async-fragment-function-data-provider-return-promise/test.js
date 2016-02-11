exports.templateData = {
    userInfo: function() {
        var deferred = require('raptor-promises').defer();
        setTimeout(function() {
            deferred.resolve({
                name: 'John'
            });
        }, 200);
        return deferred.promise;
    }
};