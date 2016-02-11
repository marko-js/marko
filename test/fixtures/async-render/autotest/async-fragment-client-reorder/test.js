exports.templateData = {
    outer: function(callback) {
        setTimeout(function() {
            callback(null, {});
        }, 400);
    },
    inner1: function(callback) {
        setTimeout(function() {
            callback(null, {});
        }, 500);
    },
    inner2: function(callback) {
        setTimeout(function() {
            callback(null, {});
        }, 600);
    }
};
