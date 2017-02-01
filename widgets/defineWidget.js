'use strict';
/* jshint newcap:false */

 var BaseState;
 var BaseWidget;
 var inherit;

module.exports = function defineWidget(def, renderer) {
    if (def.$__isWidget) {
        return def;
    }

    var WidgetClass;
    var proto;

    if (typeof def === 'function') {
        WidgetClass = def;
        proto = WidgetClass.prototype;
    } else if (typeof def === 'object') {
        WidgetClass = function() {};
        proto = WidgetClass.prototype = def;
    } else {
        throw TypeError();
    }

    // We don't use the constructor provided by the user
    // since we don't invoke their constructor until
    // we have had a chance to do our own initialization.
    // Instead, we store their constructor in the "initWidget"
    // property and that method gets called later inside
    // init-widgets-browser.js
    function Widget(id, doc) {
        BaseWidget.call(this, id, doc);
    }

    if (!proto.$__isWidget) {
        // Inherit from Widget if they didn't already
        inherit(WidgetClass, BaseWidget);
    }

    // The same prototype will be used by our constructor after
    // we he have set up the prototype chain using the inherit function
    proto = Widget.prototype = WidgetClass.prototype;

    proto.onCreate = proto.onCreate || WidgetClass;

    proto.constructor = def.constructor = Widget;

    // Set a flag on the constructor function to make it clear this is
    // a widget so that we can short-circuit this work later
    Widget.$__isWidget = true;

    function State() { BaseState.apply(this, arguments); }
    inherit(State, BaseState);
    proto.$__State = State;
    proto.renderer = renderer;

    return Widget;
};

BaseState = require('./State');
BaseWidget = require('./Widget');
inherit = require('raptor-util/inherit');