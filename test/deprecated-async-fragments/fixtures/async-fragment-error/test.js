exports.templateData = {
    testDataProvider: function (done) {
        setTimeout(function () {
            var err = new Error('Something went wrong!');
            done(err, null);
        }, 200);
    }
};