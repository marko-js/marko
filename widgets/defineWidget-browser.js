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
 var BaseState;
 var BaseWidget;
 var inherit;


module.exports = function defineWidget(def, renderer) {
    if (def._isWidget) {
        return def;
    }

    var WidgetClass;
    var proto;

    if (typeof def === 'function') {
        WidgetClass = def;
        proto = WidgetClass.prototype;

        if (proto.render && proto.render.length === 2) {
            throw new Error('"render(input, out)" is no longer supported. Use "renderer(input, out)" instead.');
        }
    } else if (typeof def === 'object') {
        WidgetClass = def.init || function() {};
        proto = WidgetClass.prototype = def;
    } else {
        throw new Error('Invalid widget');
    }

    // We don't use the constructor provided by the user
    // since we don't invoke their constructor until
    // we have had a chance to do our own initialization.
    // Instead, we store their constructor in the "initWidget"
    // property and that method gets called later inside
    // init-widgets-browser.js
    function Widget(id, document) {
        BaseWidget.call(this, id, document);
    }

    if (!proto._isWidget) {
        // Inherit from Widget if they didn't already
        inherit(WidgetClass, BaseWidget);
    }

    // The same prototype will be used by our constructor after
    // we he have set up the prototype chain using the inherit function
    proto = Widget.prototype = WidgetClass.prototype;

    proto.initWidget = WidgetClass;

    proto.constructor = def.constructor = Widget;

    // Set a flag on the constructor function to make it clear this is
    // a widget so that we can short-circuit this work later
    Widget._isWidget = true;

    // Set widget state constructor
    proto.State = function State() { BaseState.apply(this, arguments); };
    inherit(proto.State, BaseState);

    if (!renderer) {
        renderer = WidgetClass.renderer || WidgetClass.prototype.renderer;
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
        // new widget constructor function
        Widget.renderer = proto.renderer = renderer;
        Widget.render = renderer.render;
        Widget.renderSync = renderer.renderSync;
    }

    return Widget;
};

BaseState = require('./State');
BaseWidget = require('./Widget');
inherit = require('raptor-util/inherit');