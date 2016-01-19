module.exports = function render(input, context) {
    var content = {};

    if (input.getContent) {
        input.getContent({
            handlePutTag: function (putTag) {
                content[putTag.into] = putTag;
            }
        });
    }

    var dataArg = input.__data;
    var templateData = input['*'] || {};

    if (dataArg) {
        for (var k in dataArg) {
            if (dataArg.hasOwnProperty(k) && !templateData.hasOwnProperty(k)) {
                templateData[k] = dataArg[k];
            }
        }
    }
    templateData.layoutContent = content;
    input.__template.render(templateData, context);
};