module.exports = function include(input, out) {
    var target = input._target;
    var arg = input._arg || input;

    if (target) {
        if (typeof target === 'function') {
            target(out, arg);
        } else if (typeof target === 'string') {
            out.text(target);
        } else if (typeof target === 'object') {
            if (target.renderBody) {
                target.renderBody(out, arg);
            } else if (target.renderer) {
                target.renderer(arg, out);
            } else if (target.render) {
                target.render(arg, out);
            } else if (target.safeHTML) {
                out.write(target.safeHTML);
            }
        } else {
            throw new Error('Invalid include target: ' + target);
        }
    }
};
