exports.templateData = {
    beginAsync: function (out) {
        var asyncOut = out.beginAsync();
        setTimeout(function () {
            asyncOut.write('B');
            asyncOut.end();
        }, 20);
    }
};