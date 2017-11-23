exports.templateData = {
    userProvider: function (cb) {
        setTimeout(function () {
            cb(null, { name: 'Frank' });
        }, 100);
    }
};