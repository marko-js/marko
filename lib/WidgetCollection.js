var isArray = Array.isArray;
var DataHolder = require('raptor-async/DataHolder');

function WidgetCollection() {
    this._waitFor = {};
}
/**
 *
 */
WidgetCollection.prototype = {
    _remove: function (widget, id) {
        var existing = this[id];
        if (isArray(existing)) {
            this[id] = existing.filter(function (cur) {
                return cur !== widget;
            });
            if (!existing.length) {
                delete this[id];
            }
        } else {
            delete this[id];
        }
    },
    _add: function (widget, id, isTargetArray) {
        var existing = this[id];
        if (!existing) {
            this[id] = isTargetArray ? [widget] : widget;
        } else {
            if (isArray(existing)) {
                existing.push(widget);
            } else {
                this[id] = [
                    existing,
                    widget
                ];
            }
        }

        var waitFor = this._waitFor[id];
        if (waitFor) {
            waitFor.resolve(widget);
            delete this._waitFor[id];
        }
    },
    forEach: function (id, callback, thisObj) {
        if (typeof id === 'function') {
            callback = id;
            id = null;
        }

        var widgets;

        if (id) {
            widgets = this[id];
            if (widgets) {
                if (!isArray(widgets)) {
                    widgets = [widgets];
                }
                widgets.forEach(callback, thisObj);
            }
        } else {
            for (var curId in this) {
                if (this.hasOwnProperty(curId)) {
                    this.forEach(curId, callback, thisObj);
                }
            }
        }
        return this;
    },
    waitFor: function(id, callback) {
        if (this.hasOwnProperty(id)) {
            callback(null, this[id]);
        } else {
            var waitFor = this._waitFor[id] || (this._waitFor[id] = new DataHolder());
            waitFor.done(callback);
        }
        return this;
    }
};

module.exports = WidgetCollection;