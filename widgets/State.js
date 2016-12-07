var updateManager = require('./update-manager');
var extend = require('raptor-util/extend');

function ensure(state, propertyName) {
    var proto = state.constructor.prototype;
    if (!proto.hasOwnProperty(propertyName)) {
        Object.defineProperty(proto, propertyName, {
            get: function() {
                return this.__widget.__rawState[propertyName];
            },
            set: function(value) {
                this._set(propertyName, value, false /* ensure:false */);
            }
        });
    }
}

function State(widget, initialState) {
    this.__widget = widget;
    widget.__rawState = initialState || {};

    if(initialState) {
        for(var key in initialState) {
            if(initialState.hasOwnProperty(key)) {
                ensure(this, key);
            }
        }
    }
}

State.prototype = {
    _replace: function(newState, noQueue) {
        var state = this;
        var widget = state.__widget;
        var key;

        for (key in widget.__rawState) {
            if (widget.__rawState.hasOwnProperty(key) && !newState.hasOwnProperty(key)) {
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
        var state = this;
        var widget = state.__widget;

        if (!shouldEnsure) {
            ensure(state, name);
        }

        if (typeof value === 'function') {
            return;
        }

        if (value === null) {
            // Treat null as undefined to simplify our comparison logic
            value = undefined;
        }

        if (forceDirty) {
            var dirtyState = widget.__dirtyState || (widget.__dirtyState = {});
            dirtyState[name] = true;
        } else if (widget.__rawState[name] === value) {
            return;
        }

        var clean = !widget.__dirty;

        if (clean) {
            // This is the first time we are modifying the widget state
            // so introduce some properties to do some tracking of
            // changes to the state
            var currentState = widget.__rawState;
            widget.__dirty = true; // Mark the widget state as dirty (i.e. modified)
            widget.__oldState = currentState;
            widget.__rawState = extend({}, currentState);
            widget.__stateChanges = {};
        }

        widget.__stateChanges[name] = value;

        if (value == null) {
            // Don't store state properties with an undefined or null value
            delete widget.__rawState[name];
        } else {
            // Otherwise, store the new value in the widget state
            widget.__rawState[name] = value;
        }

        if (clean && noQueue !== true) {
            // If we were clean before then we are now dirty so queue
            // up the widget for update
            updateManager.queueWidgetUpdate(widget);
        }
    },
    toJSON: function() {
        return this.__widget.__rawState;
    }
};

module.exports = State;