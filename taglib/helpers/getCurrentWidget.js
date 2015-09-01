module.exports = function getCurrentWidget(out) {
    var widgets = out.global.widgets;
    if (!widgets) {
        throw new Error('No widget found');
    }

    var widget = widgets.getCurrentWidget();
    if (!widget) {
        throw new Error('No widget found');
    }

    return widget;
};