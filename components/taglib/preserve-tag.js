module.exports = function render(input, out) {
    // TODO Remove the preserve tag out of the AST if compiled for the server
    if (input.renderBody) {
        input.renderBody(out);
    }
};
