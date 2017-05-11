module.exports = function renderCompontent(tagRenderer, input, out, componentArgs) {
    out.___componentArgs = componentArgs;
    tagRenderer(input, out);
    out.___componentArgs = null;
};
