/*
 * Copyright 2011 eBay Software Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

require('raptor-polyfill/string/endsWith');

var repeatedId = require('./repeated-id');

/**
 * A WidgetDef is used to hold the metadata collected at runtime for
 * a single widget and this information is used to instantiate the widget
 * later (after the rendered HTML has been added to the DOM)
 */
function WidgetDef(config, endFunc, out) {
    this.type = config.type; // The widget module type name that is passed to the factory
    this.id = config.id; // The unique ID of the widget
    this.config = config.config; // Widget config object (may be null)
    this.state = config.state; // Widget state object (may be null)
    this.scope = config.scope; // The ID of the widget that this widget is scoped within
    this.customEvents = config.customEvents; // An array containing information about custom events
    this.bodyElId = config.bodyElId; // The ID for the default body element (if any any)
    this.roots = config.roots;
    this.body = config.body;

    this.children = null; // An array of nested WidgetDef instances
    this.end = endFunc; // A function that when called will pop this widget def off the stack
    this.domEvents = null; // An array of DOM events that need to be added (in sets of three)
    this.out = out; // The AsyncWriter that this widget is associated with
    this._nextId = 0; // The unique integer to use for the next scoped ID
}

WidgetDef.prototype = {
    /**
     * Register a nested widget for this widget. We maintain a tree of widgets
     * so that we can instantiate nested widgets before their parents.
     */
    addChild: function (widgetDef) {
        var children = this.children;

        if (children) {
            children.push(widgetDef);
        } else {
            this.children = [widgetDef];
        }
    },
    /**
     * This helper method generates a unique and fully qualified DOM element ID
     * that is unique within the scope of the current widget. This method prefixes
     * the the nestedId with the ID of the current widget. If nestedId ends
     * with `[]` then it is treated as a repeated ID and we will generate
     * an ID with the current index for the current nestedId.
     * (e.g. "myParentId-foo[0]", "myParentId-foo[1]", etc.)
     */
    elId: function (nestedId) {
        if (nestedId == null) {
            return this.id;
        } else {
            if (typeof nestedId === 'string' && nestedId.endsWith('[]')) {
                return repeatedId.nextId(this.out, this.id, nestedId);
            } else {
                return this.id + '-' + nestedId;
            }
        }
    },
    /**
     * Registers a DOM event for a nested HTML element associated with the
     * widget. This is only done for non-bubbling events that require
     * direct event listeners to be added.
     * @param  {String} type The DOM event type ("mouseover", "mousemove", etc.)
     * @param  {String} targetMethod The name of the method to invoke on the scoped widget
     * @param  {String} elId The DOM element ID of the DOM element that the event listener needs to be added too
     */
    addDomEvent: function(type, targetMethod, elId, extraArgs) {
        if (!targetMethod) {
            // The event handler method is allowed to be conditional. At render time if the target
            // method is null then we do not attach any direct event listeners.
            return;
        }

        if (!this.domEvents) {
            this.domEvents = [];
        }
        this.domEvents.push(type);
        this.domEvents.push(targetMethod);
        this.domEvents.push(elId);
        this.domEvents.push(extraArgs);
    },
    /**
     * Returns a string representation of the DOM events data.
     */
    getDomEventsAttr: function() {
        if (this.domEvents) {
            return this.domEvents.join(',');
        }
    },
    /**
     * Returns the next auto generated unique ID for a nested DOM element or nested DOM widget
     */
    nextId: function() {
        return this.id + '-w' + (this._nextId++);
    },

    toJSON: function() {
        return  {
            type: this.type,
            id: this.id,
            config: this.config,
            state: this.state,
            scope: this.scope,
            domEvents: this.domEvents,
            customEvents: this.customEvents,
            bodyElId: this.bodyElId,
            roots: this.roots
        };
    }
};

module.exports = WidgetDef;