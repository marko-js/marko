var updateManager = require('./update-manager');
var extend = require('raptor-util/extend');

function ensure(state, propertyName) {
    var proto = state.constructor.prototype;
    if (!proto.hasOwnProperty(propertyName)) {
        Object.defineProperty(proto, propertyName, {
            get: function() {
                return this._raw[propertyName];
            },
            set: function(value) {
                this._set(propertyName, value, false /* ensure:false */);
            }
        });
    }
}

function State(widget, initialState) {
    this._widget = widget;
    this._raw = initialState || {};

    this._dirty = false;
    this._old = null;
    this._changes = null;
    this._forced = null; // An object that we use to keep tracking of state properties that were forced to be dirty

    if (initialState) {
        for(var key in initialState) {
            if (initialState.hasOwnProperty(key)) {
                ensure(this, key);
            }
        }
    }
}

State.prototype = {
    _reset: function() {
        var self = this;

        self._dirty = false;
        self._old = null;
        self._changes = null;
        self._forced = null;
    },

    _replace: function(newState, noQueue) {
        var state = this;
        var key;

        var rawState = this._raw;

        for (key in rawState) {
            if (rawState.hasOwnProperty(key) && !newState.hasOwnProperty(key)) {
                state._set(key, undefined, false /* ensure:false */, false /* forceDirty:false */, noQueue);
            }
        }

        for (key in newState) {
            if (newState.hasOwnProperty(key)) {
                state._set(key, newState[key], true /* ensure:true */, false /* forceDirty:false */, noQueue);
            }
        }
    },
    _set: function(name, value, shouldEnsure, forceDirty, noQueue) {
        var self = this;
        var rawState = self._raw;

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
            var forcedDirtyState = this._forced || (this._forced = {});
            forcedDirtyState[name] = true;
        } else if (rawState[name] === value) {
            return;
        }

        var clean = !this._dirty;

        if (clean) {
            // This is the first time we are modifying the widget state
            // so introduce some properties to do some tracking of
            // changes to the state
            this._dirty = true; // Mark the widget state as dirty (i.e. modified)
            this._old = rawState;
            this._raw = rawState = extend({}, rawState);
            this._changes = {};
        }

        this._changes[name] = value;

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
            updateManager.queueWidgetUpdate(self._widget);
        }
    },
    toJSON: function() {
        return this._raw;
    }
};

module.exports = State;