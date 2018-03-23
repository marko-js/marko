module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index"), {});

    var oldChildren = helpers.nodeListToArray(component.el.childNodes);

    component.forceUpdate();
    component.update();

    var newChildren = component.el.childNodes;
    helpers.checkChildrenMatch(oldChildren, newChildren);
};
