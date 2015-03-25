module.exports = function defineWidget(def) {
    if (def._isWidget) {
        return def;
    }


    var renderer;

    if (def.template) {
        renderer = defineRenderer(def);
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
    } else if (typeof def === 'object') {
        WidgetClass = def.init || function() {};
        proto = WidgetClass.prototype = def;
    } else {
        throw new Error('Invalid widget');
    }

    var WidgetClassWithMixins = function(id) {
        Widget.call(this, id);
    };

    if (!proto._isWidget) {
        inherit(WidgetClass, Widget);
    }

    //This will be a reference to the original prorotype
    proto = WidgetClassWithMixins.prototype = WidgetClass.prototype;

    proto.initWidget = WidgetClass;

    proto.constructor = def.constructor = WidgetClassWithMixins;

    WidgetClassWithMixins = WidgetClassWithMixins;

    WidgetClassWithMixins._isWidget = true;

    if (renderer) {
        WidgetClassWithMixins.renderer = proto.renderer = renderer;
        WidgetClassWithMixins.render = renderer.render;
    }

    return WidgetClassWithMixins;
};

var Widget = require('./Widget');
var inherit = require('raptor-util/inherit');
var defineRenderer = require('./defineRenderer');

