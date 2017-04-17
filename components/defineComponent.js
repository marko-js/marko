'use strict';
/* jshint newcap:false */

var BaseState = require('./State');
var BaseComponent = require('./Component');
var inherit = require('raptor-util/inherit');

module.exports = function defineComponent(def, renderer) {
    if (def.$__isComponent) {
        return def;
    }

    var ComponentClass = function() {};
    var proto;

    var type = typeof def;

    if (type == 'function') {
        proto = def.prototype;
    } else if (type == 'object') {
        proto = def;
    } else {
        throw TypeError();
    }

    ComponentClass.prototype = proto;

    // We don't use the constructor provided by the user
    // since we don't invoke their constructor until
    // we have had a chance to do our own initialization.
    // Instead, we store their constructor in the "initComponent"
    // property and that method gets called later inside
    // init-components-browser.js
    function Component(id) {
        BaseComponent.call(this, id);
    }

    if (!proto.$__isComponent) {
        // Inherit from Component if they didn't already
        inherit(ComponentClass, BaseComponent);
    }

    // The same prototype will be used by our constructor after
    // we he have set up the prototype chain using the inherit function
    proto = Component.prototype = ComponentClass.prototype;

    // proto.constructor = def.constructor = Component;

    // Set a flag on the constructor function to make it clear this is
    // a component so that we can short-circuit this work later
    Component.$__isComponent = true;

    function State(component) { BaseState.call(this, component); }
    inherit(State, BaseState);
    proto.$__State = State;
    proto.$__renderer = renderer;

    return Component;
};
