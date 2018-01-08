module.exports = function (input, out) {
    var asyncOut = out.beginAsync();
    setTimeout(function () {
        asyncOut.write('[async]');
        asyncOut.end();
    }, 10);
};