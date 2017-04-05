module.exports = function renderCompontent(tagRenderer, input, out, componentArgs) {
    out.$__componentArgs = componentArgs;
    tagRenderer(input, out);
    out.$__componentArgs = null;
};
