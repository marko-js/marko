module.exports = function defineWidget(def, renderer) {
    if (def._isWidget) {
        return def;
    }

    var extendWidget = def.extendWidget;
    if (extendWidget) {
        return {
            renderer: renderer,
            render: renderer.render,
            extendWidget: function(widget) {
                extendWidget(widget);
                widget.renderer = renderer;
            }
        };
    }

    var WidgetClass;
    var proto;

    if (typeof def === 'function') {
        WidgetClass = def;
        proto = WidgetClass.prototype;

        if (proto.render && proto.render.length === 2) {
            throw new Error('"render(input, out)" is no longer supported. Use "renderer(input, out)" instead.');
        }
    } else if (typeof def === 'object') {
        WidgetClass = def.init || function() {};
        proto = WidgetClass.prototype = def;
    } else {
        throw new Error('Invalid widget');
    }

    // We don't use the constructor provided by the user
    // since we don't invoke their constructor until
    // we have had a chance to do our own initialization.
    // Instead, we store their constructor in the "initWidget"
    // property and that method gets called later inside
    // init-widgets-browser.js
    function WidgetClassWithMixins(id) {
        Widget.call(this, id);
    }

    if (!proto._isWidget) {
        // Inherit from Widget if they didn't already
        inherit(WidgetClass, Widget);
    }

    // The same prototype will be used by our constructor after
    // we he have set up the prototype chain using the inherit function
    proto = WidgetClassWithMixins.prototype = WidgetClass.prototype;

    proto.initWidget = WidgetClass;

    proto.constructor = def.constructor = WidgetClassWithMixins;

    // Set a flag on the constructor function to make it clear this is
    // a widget so that we can short-circuit this work later
    WidgetClassWithMixins._isWidget = true;

    if (renderer) {
        // Add the rendering related methods as statics on the
        // new widget constructor function
        WidgetClassWithMixins.renderer = proto.renderer = renderer;
        WidgetClassWithMixins.render = renderer.render;
    }

    return WidgetClassWithMixins;
};

var Widget = require('./Widget');
var inherit = require('raptor-util/inherit');

