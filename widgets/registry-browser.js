var loadWidget = require('./loadWidget');
var defineWidget = require('./defineWidget');

var registered = {};
var loaded = {};
var widgetTypes = {};

function register(typeName, def) {
    if (typeof def === 'function') {
        // We do this to kick off registering of nested widgets
        // but we don't use the return value just yet since there
        // is a good chance that it resulted in a circular dependency
        def();
    }

    registered[typeName] = def;
    delete loaded[typeName];
    delete widgetTypes[typeName];
    return typeName;
}

function load(typeName) {
    var target = loaded[typeName];
    if (target === undefined) {
        target = registered[typeName];

        if (typeof target === 'function') {
            target = target();
        }
        if (!target) {
            target = loadWidget(typeName); // Assume the typeName has been fully resolved already
        }
        loaded[typeName] = target || null;
    }

    if (target == null) {
        throw new Error('Unable to load: ' + typeName);
    }
    return target;
}

function getWidgetClass(typeName) {
    var WidgetClass = widgetTypes[typeName];

    if (WidgetClass) {
        return WidgetClass;
    }

    WidgetClass = load(typeName);

    if (WidgetClass.Widget) {
        WidgetClass = WidgetClass.Widget;
    }

    if (!WidgetClass.$__isWidget) {
        WidgetClass = defineWidget(WidgetClass, WidgetClass.renderer);
    }

    // Make the widget "type" accessible on each widget instance
    WidgetClass.prototype.$__type = typeName;

    widgetTypes[typeName] = WidgetClass;

    return WidgetClass;
}

function createWidget(typeName, id) {
    var WidgetClass = getWidgetClass(typeName);
    var widget;
    if (typeof WidgetClass === 'function') {
        // The widget is a constructor function that we can invoke to create a new instance of the widget
        widget = new WidgetClass(id);
    } else if (WidgetClass.initWidget) {
        widget = WidgetClass;
    }
    return widget;
}

exports.$__register = register;
exports.$__createWidget = createWidget;
