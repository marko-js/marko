var path = require("path");

module.exports = function(rootNode, context) {
    var builder = context.builder;
    var templateName = path.basename(context.filename);

    rootNode.appendChild(
        builder.htmlComment(builder.literal("END2: " + templateName))
    );
};
