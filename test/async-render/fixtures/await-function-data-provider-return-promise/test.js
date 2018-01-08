exports.templateData = {
    userInfo: function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve({
                    name: 'John'
                });
            }, 100);
        });
    }
};