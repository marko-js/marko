exports.renderer = function (input, out) {
    out.write('scanned-g: Hello ' + input.name);
};