exports.templateData = {
    userInfo: function (arg, done) {
        done(null, {
            name: 'John'
        });
    }
};