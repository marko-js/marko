var config = require("marko/compiler/config");
var oldMeta = config.meta;

config.meta = true;

exports.checkTemplate = function(template, snapshot) {
    var dependencies = template.getDependencies();
    config.meta = oldMeta;

    snapshot(JSON.stringify(dependencies, null, 4), ".json");
};
