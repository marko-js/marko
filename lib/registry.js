var registered = {};

exports.register = function(path, type) {
    registered[path] = type;
};

var Widget = require('./Widget');
var inherit = require('raptor-util/inherit');
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

    if (WidgetClass.Widget) {
        WidgetClass = WidgetClass.Widget;
    }

    if (typeof WidgetClass === 'function') {
        var WidgetClassWithMixins = function(id) {
            Widget.call(this, id);
        };

        var proto;

        if (!WidgetClass.prototype._isWidget) {
            // original widget class does not extend Widget
            if (WidgetClass.$super) {
                // the widget class already has its own super class

                // find the base class
                var cur = WidgetClass.$super;
                while(cur.$super) {
                    cur = cur.$super;
                }

                // copy Widget prototype methods to prototype of base class
                // NOTE: We're not using hasOwnProperty because we also want
                // properties from prototype that Widget extends
                for (var key in Widget.prototype) {
                    cur.prototype[key] = Widget.prototype[key];
                }
            } else {
                inherit(WidgetClass, Widget);
            }
        }

        //This will be a reference to the original prorotype
        WidgetClassWithMixins.prototype = proto = WidgetClass.prototype;

        proto.initWidget = WidgetClass;

        WidgetClass = WidgetClassWithMixins;
    } else if (!WidgetClass.initWidget) {
        throw new Error('Invalid widget: ' + path);
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