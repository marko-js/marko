module.exports = function render(input, context) {
    var layout = input.layout;
    var handlePutTag = layout.handlePutTag;
    handlePutTag(input);
};