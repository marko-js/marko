exports.render = function (input, out) {
    out.write('[' + [input.prop1, input.prop2, input.default1, input.default2].join(',') + ']');
};