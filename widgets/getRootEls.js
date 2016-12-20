module.exports = function getRootEls(widget, rootEls) {
    var i, len;

    var widgetEls = widget.els;

    for (i=0, len=widgetEls.length; i<len; i++) {
        var widgetEl = widgetEls[i];
        rootEls[widgetEl.id] = widgetEl;
    }

    var rootWidgets = widget.$__rootWidgets;
    if (rootWidgets) {
        for (i=0, len=rootWidgets.length; i<len; i++) {
            var rootWidget = rootWidgets[i];
            getRootEls(rootWidget, rootEls);
        }
    }

    return rootEls;
};