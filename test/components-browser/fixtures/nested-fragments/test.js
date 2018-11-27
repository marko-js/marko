module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index.marko"), {});
    component.setState("showLast", false);
    component.update();
};
