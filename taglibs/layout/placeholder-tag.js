module.exports = function render(input, out) {
    var contentMap = input.content;
    var content = contentMap ? contentMap[input.name] : null;
    if (content) {
        if (content.value) {
            out.write(content.value);
        } else if (content.renderBody) {
            content.renderBody(out);
        }
    } else {
        if (input.renderBody) {
            input.renderBody(out);
        }
    }
};