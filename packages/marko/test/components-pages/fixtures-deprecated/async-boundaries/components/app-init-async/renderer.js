var template = require("marko").load(require.resolve("./template.marko"));

exports.renderer = function(input, out) {
    template.render(input || {}, out);
};
