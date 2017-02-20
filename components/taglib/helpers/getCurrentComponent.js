/**
 * Helper method to return the WidgetDef for the current widget being rendered.
 * This is, it returns the widget at the top of the widget stack.
 * @param  {AsyncWriter} out The current rendering context that holds info about rendered widgets.
 * @return {WidgetDef} The WidgetDef instance
 */
module.exports = function getCurrentWidget(out) {
    var widgetsContext = out.global.widgets;
    var widgetStack;
    var len;

    if (!widgetsContext || (len = (widgetStack = widgetsContext.$__widgetStack).length) < 2) {
        throw Error('No widget found');
    }

    return widgetStack[len - 1];
};