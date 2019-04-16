var FLAG_WILL_RERENDER_IN_BROWSER = 1;
// var FLAG_HAS_BODY_EL = 2;
// var FLAG_HAS_HEAD_EL = 4;

module.exports = function markoKeyAttr(key, componentDef) {
    if ((componentDef.___flags & FLAG_WILL_RERENDER_IN_BROWSER) === 0) {
        return key + " " + componentDef.id;
    }
};
