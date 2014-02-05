exports.render = function(input, context) {
    context.write("test: " + input.test + "|");
    var dynamicAttributes = input['*'];
    
    if (dynamicAttributes) {
        var keys = Object.keys(dynamicAttributes).sort();
        var entries = keys.map(function(key) {
            return key+"="+dynamicAttributes[key];
        });
        context.write("dynamic attributes: [" + entries.join(", ") + "]");
    }
    else {
        context.write("dynamic attributes: []");
    }
};