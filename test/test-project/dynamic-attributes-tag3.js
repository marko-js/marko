exports.render = function(input, context) {
    context.write("test: " + input.test + "|");
    
    var keys = Object.keys(input).sort();
    var entries = keys.map(function(key) {
        return key+"="+input[key];
    });
    context.write("all attributes: [" + entries.join(", ") + "]");
};