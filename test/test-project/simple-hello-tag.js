exports.render = function(input, out) {
    var name = input.name || "(unknown)";
    out.write("Hello " + name + "! adult=" + (input.adult === true));
};