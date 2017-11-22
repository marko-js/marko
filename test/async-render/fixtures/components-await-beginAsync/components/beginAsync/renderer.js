module.exports = function (input, out) {
    var asyncOut = out.beginAsync();
    setTimeout(function () {
        input.renderBody(asyncOut);
        asyncOut.end();
    }, 10);
};