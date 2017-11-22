module.exports = function (input, out) {
    var asyncOut = out.beginAsync();
    setTimeout(function () {
        asyncOut.write('[async] ' + input.name);
        asyncOut.end();
    }, 10);
};