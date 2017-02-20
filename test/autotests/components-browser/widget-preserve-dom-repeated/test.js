module.exports = function(helpers) {
    var component = helpers.mount(require('./index'), {});

    var oldChildren = helpers.nodeListToArray(component.el.childNodes);

    component.rerender();

    var newChildren = component.el.childNodes;
    helpers.checkChildrenMatch(oldChildren, newChildren);
};