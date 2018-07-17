"use strict";
/* jshint newcap:false */

var BaseState = require("./State");
var BaseComponent = require("./Component");
var inherit = require("raptor-util/inherit");
var mobx = require("mobx");

module.exports = function defineComponent(def, renderer) {
    if (def.___isComponent) {
        return def;
    }

    var ComponentClass = function() {};
    var proto;

    var type = typeof def;

    if (type == "function") {
        proto = def.prototype;
    } else if (type == "object") {
        proto = def;
    } else {
        throw TypeError();
    }

    ComponentClass.prototype = proto;

    /**
     * little hack to allow components to be annotated
     *
     * TODO see if we can use a custom tag like mobx {} and access this information from here
     *
     * for now, just add the following to a component class to make it react to mobx state changes
     *
     * class {
     *   mobxObservable(){}
     * }
     *
     */
    if (proto.mobxObservable) {
        // trying to work out the most reliale way of forcing an update, so far state-change is the preference
        // it just introduces a ___mobx property into the component state, or creates the state if not defined
        // TODO need to consider serilisation for when used on a server rendered component
        let MODE_STATE_CHANGE = "state-change";

        // force-update seems to miss some updates, requiring a update() call to get it on track
        let MODE_FORCE_UPDATE = "force-update";

        // calling forceUpdate(); update() is updat()-ing more times than necessary
        let MODE_FORCE_UPDATE_UPDATE = "force-update-update";

        let UPDATE_MODE = MODE_STATE_CHANGE;
        if (UPDATE_MODE == MODE_STATE_CHANGE) {
            proto.___mobx_mark_dirty = function() {
                this.state.___mobx++;
            };
        } else if (UPDATE_MODE == MODE_FORCE_UPDATE) {
            proto.___mobx_mark_dirty = function() {
                this.forceUpdate();
            };
        } else if (UPDATE_MODE == MODE_FORCE_UPDATE_UPDATE) {
            proto.___mobx_mark_dirty = function() {
                this.forceUpdate();
                this.update();
            };
        }
        let onDestroy = proto.onDestroy;
        proto.onDestroy = function() {
            this.___mobx_reaction && this.___mobx_reaction.dispose();
            delete this.___mobx_reaction;
            if (onDestroy) onDestroy.apply(this, arguments);
        };
        let onCreate = proto.onCreate;
        proto.onCreate = function() {
            this.___mobx_init();

            if (onCreate) onCreate.apply(this, arguments);

            if (UPDATE_MODE == MODE_STATE_CHANGE) {
                if (!this.state) {
                    this.state = {
                        ___mobx: 0
                    };
                } else {
                    this.state.___set("___mobx", 0, true, false);
                }
            }
        };

        proto.___mobx_init = function() {
            if (this.___mobx_reaction) return false;
            // if (this.mobxObservable())console.log("mobxObservable", this.mobxObservable());
            this.___mobx_reaction = new mobx.Reaction(
                this.___type,
                this.___mobx_mark_dirty.bind(this)
            );
            return true;
        };

        // hook which renderer.js calls
        proto.___mobx_render = function(renderFunc) {
            this.___mobx_reaction.track(() => {
                mobx._allowStateChanges(false, renderFunc);
            });
        };
    }
    // We don't use the constructor provided by the user
    // since we don't invoke their constructor until
    // we have had a chance to do our own initialization.
    // Instead, we store their constructor in the "initComponent"
    // property and that method gets called later inside
    // init-components-browser.js
    function Component(id) {
        BaseComponent.call(this, id);
    }

    if (!proto.___isComponent) {
        // Inherit from Component if they didn't already
        inherit(ComponentClass, BaseComponent);
    }

    // The same prototype will be used by our constructor after
    // we he have set up the prototype chain using the inherit function
    proto = Component.prototype = ComponentClass.prototype;

    // proto.constructor = def.constructor = Component;

    // Set a flag on the constructor function to make it clear this is
    // a component so that we can short-circuit this work later
    Component.___isComponent = true;

    function State(component) {
        BaseState.call(this, component);
    }
    inherit(State, BaseState);
    proto.___State = State;
    proto.___renderer = renderer;

    return Component;
};
