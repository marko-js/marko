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

/**
 * Define a new UI component that includes widget and renderer.
 *
 * @param  {Object} def The definition of the UI component (widget methods, widget constructor, rendering methods, etc.)
 * @return {Widget} The resulting Widget with renderer
 */
var defineRenderer;
var defineWidget;

module.exports = function defineComponent(def) {
    if (def._isWidget) {
        return def;
    }

    var renderer;

    if (def.template || def.renderer) {
        renderer = defineRenderer(def);
    } else {
        throw new Error('Expected "template" or "renderer"');
    }

    return defineWidget(def, renderer);
};

defineRenderer = require('./defineRenderer');
defineWidget = require('./defineWidget');

