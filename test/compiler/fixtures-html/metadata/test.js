var config = require("marko/compiler/config");
var oldMeta = config.meta;

config.meta = true;

exports.checkTemplate = function(template, helpers) {
    var dependencies = template.getDependencies();
    config.meta = oldMeta;

    helpers.compare(JSON.stringify(dependencies, null, 4), ".json");
};
