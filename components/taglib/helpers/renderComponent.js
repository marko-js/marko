module.exports = function renderCompontent(tagRenderer, input, out, componentArgs) {
    out.$c = componentArgs;
    tagRenderer(input, out);
    out.$c = null;
};
