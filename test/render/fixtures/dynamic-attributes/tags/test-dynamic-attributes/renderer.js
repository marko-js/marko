exports.render = function (input, out) {
    out.write("test: " + input.test + "|");
    var dynamicAttributes = input.dynamicAttributes;

    if (dynamicAttributes) {
        var keys = Object.keys(dynamicAttributes).sort();
        var entries = keys.map(function (key) {
            return key + "=" + dynamicAttributes[key];
        });
        out.write("dynamic attributes: [" + entries.join(", ") + "]");
    } else {
        out.write("dynamic attributes: []");
    }
};