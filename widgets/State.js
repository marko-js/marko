var updateManager = require('./update-manager');
var extend = require('raptor-util/extend');

function ensure(state, propertyName) {
    var proto = state.constructor.prototype;
    if (!proto.hasOwnProperty(propertyName)) {
        Object.defineProperty(proto, propertyName, {
            get: function() {
                return this.$__raw[propertyName];
            },
            set: function(value) {
                this.$__set(propertyName, value, false /* ensure:false */);
            }
        });
    }
}

function State(widget, initialState) {
    this.$__widget = widget;
    this.$__raw = initialState || {};

    this.$__dirty = false;
    this.$__old = null;
    this.$__changes = null;
    this.$__forced = null; // An object that we use to keep tracking of state properties that were forced to be dirty

    if (initialState) {
        for(var key in initialState) {
            if (initialState.hasOwnProperty(key)) {
                ensure(this, key);
            }
        }
    }
}

State.prototype = {
    $__reset: function() {
        var self = this;

        self.$__dirty = false;
        self.$__old = null;
        self.$__changes = null;
        self.$__forced = null;
    },

    $__replace: function(newState, noQueue) {
        var state = this;
        var key;

        var rawState = this.$__raw;

        for (key in rawState) {
            if (rawState.hasOwnProperty(key) && !newState.hasOwnProperty(key)) {
                state.$__set(key, undefined, false /* ensure:false */, false /* forceDirty:false */, noQueue);
            }
        }

        for (key in newState) {
            if (newState.hasOwnProperty(key)) {
                state.$__set(key, newState[key], true /* ensure:true */, false /* forceDirty:false */, noQueue);
            }
        }
    },
    $__set: function(name, value, shouldEnsure, forceDirty, noQueue) {
        var self = this;
        var rawState = self.$__raw;

        if (shouldEnsure) {
            ensure(self, name);
        }

        if (typeof value === 'function') {
            return;
        }

        if (value === null) {
            // Treat null as undefined to simplify our comparison logic
            value = undefined;
        }

        if (forceDirty) {
            var forcedDirtyState = this.$__forced || (this.$__forced = {});
            forcedDirtyState[name] = true;
        } else if (rawState[name] === value) {
            return;
        }

        var clean = !this.$__dirty;

        if (clean) {
            // This is the first time we are modifying the widget state
            // so introduce some properties to do some tracking of
            // changes to the state
            this.$__dirty = true; // Mark the widget state as dirty (i.e. modified)
            this.$__old = rawState;
            this.$__raw = rawState = extend({}, rawState);
            this.$__changes = {};
        }

        this.$__changes[name] = value;

        if (value == null) {
            // Don't store state properties with an undefined or null value
            delete rawState[name];
        } else {
            // Otherwise, store the new value in the widget state
            rawState[name] = value;
        }

        if (clean && noQueue !== true) {
            // If we were clean before then we are now dirty so queue
            // up the widget for update
            updateManager.$__queueWidgetUpdate(self.$__widget);
        }
    },
    toJSON: function() {
        return this.$__raw;
    }
};

module.exports = State;