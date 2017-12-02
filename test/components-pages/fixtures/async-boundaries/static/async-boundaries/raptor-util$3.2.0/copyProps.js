$_mod.def("/raptor-util$3.2.0/copyProps", function(require, exports, module, __filename, __dirname) { module.exports = function copyProps(from, to) {
    Object.getOwnPropertyNames(from).forEach(function(name) {
        var descriptor = Object.getOwnPropertyDescriptor(from, name);
        Object.defineProperty(to, name, descriptor);
    });
};
});