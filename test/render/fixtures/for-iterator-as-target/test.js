exports.templateData = {
    myIterator: function (callback) {
        for (var i = 5; i >= 0; i--) {
            callback(i);
        }
    }
};