exports.process = function(input, context) {
    var name = input.name || "(unknown)";
    context.write("Hello " + name + "! adult=" + (input.adult === true));
};