exports.tests = [
    {
        templateData: {
            userInfo: function() {
                var deferred = require('raptor-promises').defer();
                setTimeout(function() {
                    deferred.resolve({
                        name: 'John'
                    });
                }, 200);
                return deferred.promise;
            }
        }
    },
    {
        templateData: {
            userInfo: function() {
                return {
                    name: 'John'
                };
            }
        }
    },
    {
        templateData: {
            userInfo: function(arg, done) {
                done(null, {
                    name: 'John'
                });
            }
        }
    }
];
