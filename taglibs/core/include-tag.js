
function doInclude(input, out, throwError) {
    var target = input._target;
    var arg = input._arg || input;

    if (target) {
        if (typeof target === 'function') {
            return target(out, arg), true;
        } else if (typeof target === 'string') {
            return (target && out.text(target)), true;
        } else if (typeof target === 'object') {
            if (target.renderBody) {
                return target.renderBody(out, arg), true;
            } else if (target.renderer) {
                return target.renderer(arg, out), true;
            } else if (target.render) {
                return target.render(arg, out), true;
            } else if (target.safeHTML) {
                return out.write(target.safeHTML), true;
            } else {
                if (throwError) {
                    out.error('Invalid include target');
                }
            }
        }
    }
}

function includeTag(input, out) {
    doInclude(input, out, true);
}

includeTag.$__doInclude = doInclude;

module.exports = includeTag;
