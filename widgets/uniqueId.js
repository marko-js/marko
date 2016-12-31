var KEY = Symbol();

function UniqueId(out) {
    this.prefix = out.global.widgetIdPrefix || 'w';
    this.nextId = 0;
}

module.exports = function (out) {
    var global = out.global;

    var idProvider = global[KEY] ||
        (global[KEY] = new UniqueId(out));

    return idProvider.prefix + (idProvider.nextId++);
};