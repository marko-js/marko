module.exports = function render(input, context) {
    var layout = input.layout;
    var handlePutTag = layout ? layout.handlePutTag : context.getAttribute('handlePutTag');
    handlePutTag(input);
};