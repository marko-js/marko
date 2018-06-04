module.exports = function(el) {
    if (el.params) {
        el.params.forEach(param => el.addNestedVariable(param));
    }
};
