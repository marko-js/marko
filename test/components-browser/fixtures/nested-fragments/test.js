module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index.marko"), {});
    component.setState("showLast", false);
    component.update();
};

module.exports.fails_hydrate = "issue #1051";
