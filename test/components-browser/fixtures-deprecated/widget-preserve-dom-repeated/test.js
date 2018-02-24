module.exports = function (helpers) {
    var widget = helpers.mountLegacy({ component:require.resolve('./index') }, {});

    var oldChildren = helpers.nodeListToArray(widget.el.childNodes);

    widget.rerender();

    var newChildren = widget.el.childNodes;
    helpers.checkChildrenMatch(oldChildren, newChildren);
};