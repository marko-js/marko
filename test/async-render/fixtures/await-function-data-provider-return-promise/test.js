exports.templateData = {
    userInfo: function () {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve({
                    name: 'John'
                });
            }, 100);
        });
    }
};