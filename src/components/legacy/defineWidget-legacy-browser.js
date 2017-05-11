'use strict';
/* jshint newcap:false */

 var BaseState;
 var BaseComponent;
 var inherit;


module.exports = function defineWidget(def, renderer) {
    def = def.Widget || def;

    if (def.___isComponent) {
        return def;
    }

    var ComponentClass = function() {};
    var proto;

    if (typeof def === 'function') {
        proto = def.prototype;
        proto.init = def;
    } else if (typeof def === 'object') {
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
    function Component(id, doc) {
        BaseComponent.call(this, id, doc);
    }

    if (!proto.___isComponent) {
        // Inherit from Component if they didn't already
        inherit(ComponentClass, BaseComponent);
    }

    // The same prototype will be used by our constructor after
    // we he have set up the prototype chain using the inherit function
    proto = Component.prototype = ComponentClass.prototype;

    proto.constructor = def.constructor = Component;

    // get legacy methods
    var init = proto.init;
    var onRender = proto.onRender;
    var onBeforeUpdate = proto.onBeforeUpdate;
    var onUpdate = proto.onUpdate;
    var onBeforeDestroy = proto.onBeforeDestroy;
    var onDestroy = proto.onDestroy;

    // delete legacy methods
    delete proto.init;
    delete proto.onRender;
    delete proto.onBeforeUpdate;
    delete proto.onUpdate;
    delete proto.onBeforeDestroy;
    delete proto.onDestroy;

    proto.getWidget = proto.getComponent;
    proto.getWidgets = proto.getComponents;

    // convert legacy to modern

    if (init || onRender) {
        proto.onMount = function() {
            var self = this;
            var config = this.$c;
            if (init) init.call(this, config);
            if (onRender) {
                onRender.call(this, { firstRender:true });
                this.on('___legacyRender', function() {
                    self.___didUpdate = true;
                });
            }
        };
    }

    if (onBeforeUpdate || onUpdate) {
        proto.onUpdate = function() {
            if (onBeforeUpdate) onBeforeUpdate.call(this);
            if (onUpdate) onUpdate.call(this);
            if (onRender && this.___didUpdate) {
                this.___didUpdate = false;
                onRender.call(this, {});
            }
        };
    }

    if (onBeforeDestroy || onDestroy) {
        proto.onDestroy = function() {
            if (onBeforeDestroy) onBeforeDestroy.call(this);
            if (onDestroy) onDestroy.call(this);
        };
    }


    // Set a flag on the constructor function to make it clear this is
    // a component so that we can short-circuit this work later
    Component.___isComponent = true;

    function State() { BaseState.apply(this, arguments); }
    inherit(State, BaseState);
    proto.___State = State;


    if (!renderer) {
        renderer = ComponentClass.renderer || ComponentClass.prototype.renderer;
        if (renderer) {
            // Legacy support
            var createOut = renderer.createOut;
            if (typeof renderer !== 'function') {
                var rendererObject = renderer;
                renderer = function(input, out) {
                    var rendererFunc = rendererObject.renderer || rendererObject.render;
                    rendererFunc(input, out);
                };
                renderer.createOut = createOut;
            }

            renderer.render = function(input) {
                var out = createOut();
                renderer(input, out);
                return out.end();
            };
        }
    }


    if (renderer) {
        // Add the rendering related methods as statics on the
        // new component constructor function
        Component.renderer = proto.___renderer = renderer;
        Component.render = renderer.render;
        Component.renderSync = renderer.renderSync;
    }

    return Component;
};

BaseState = require('./State-legacy');
BaseComponent = require('../Component');
inherit = require('raptor-util/inherit');

require('../jquery').patchComponent();
