
var registered = {};

exports.register = function(path, type) {
    registered[path] = type;
};

var loaded = {};
var widgetTypes = {};

function load(path) {
    var target = loaded[path];
    if (target === undefined) {
        target = registered[path];
        if (!target) {
            target = require(path); // Assume the path has been fully resolved already
        }
        loaded[path] = target || null;
    }

    if (target == null) {
        throw new Error('Unable to load: ' + path);
    }
    return target;
}

function getWidgetClass(path) {
    var WidgetClass = widgetTypes[path];

    if (WidgetClass) {
        return WidgetClass;
    }

    WidgetClass = load(path);

    var renderer;


    if (WidgetClass.Widget) {
        WidgetClass = WidgetClass.Widget;
        renderer = WidgetClass.renderer;
    }

    WidgetClass = defineComponent(WidgetClass);

    if (renderer) {
        WidgetClass.renderer = WidgetClass.prototype.renderer = renderer;
    }

    widgetTypes[path] = WidgetClass;

    return WidgetClass;
}

exports.load = load;

exports.createWidget = function(path, id) {
    var WidgetClass = getWidgetClass(path);
    var widget;
    if (typeof WidgetClass === 'function') {
        // The widget is a constructor function that we can invoke to create a new instance of the widget
        widget = new WidgetClass(id);
    } else if (WidgetClass.initWidget) {
        widget = WidgetClass;
    }
    return widget;
};

var defineComponent = require('./defineComponent');