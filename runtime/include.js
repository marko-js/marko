module.exports = function include(target, out, data) {
    if (target) {
        if (typeof target === 'function') {
            target(out, data);
        } else if (typeof target === 'object') {
            if (target.renderBody) {
                target.renderBody(out, data);
            } else if (target.renderer) {
                target.renderer(data, out);
            } else if (target.render) {
                target.render(data, out);
            }
        } else {
            throw new Error('Invalid include target: ' + target);
        }
    }
};