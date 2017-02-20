'use strict';
/* jshint newcap:false */

 var BaseState;
 var BaseComponent;
 var inherit;

module.exports = function defineComponent(def, renderer) {
    if (def.$__isComponent) {
        return def;
    }

    var ComponentClass;
    var proto;

    if (typeof def === 'function') {
        ComponentClass = def;
        proto = ComponentClass.prototype;
    } else if (typeof def === 'object') {
        ComponentClass = function() {};
        proto = ComponentClass.prototype = def;
    } else {
        throw TypeError();
    }

    // We don't use the constructor provided by the user
    // since we don't invoke their constructor until
    // we have had a chance to do our own initialization.
    // Instead, we store their constructor in the "initComponent"
    // property and that method gets called later inside
    // init-components-browser.js
    function Component(id, doc) {
        BaseComponent.call(this, id, doc);
    }

    if (!proto.$__isComponent) {
        // Inherit from Component if they didn't already
        inherit(ComponentClass, BaseComponent);
    }

    // The same prototype will be used by our constructor after
    // we he have set up the prototype chain using the inherit function
    proto = Component.prototype = ComponentClass.prototype;

    proto.onCreate = proto.onCreate || ComponentClass;

    proto.constructor = def.constructor = Component;

    // Set a flag on the constructor function to make it clear this is
    // a component so that we can short-circuit this work later
    Component.$__isComponent = true;

    function State() { BaseState.apply(this, arguments); }
    inherit(State, BaseState);
    proto.$__State = State;
    proto.renderer = renderer;

    return Component;
};

BaseState = require('./State');
BaseComponent = require('./Component');
inherit = require('raptor-util/inherit');