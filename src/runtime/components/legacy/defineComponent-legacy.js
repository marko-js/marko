/**
 * Define a new UI component that includes component and renderer.
 *
 * @param  {Object} def The definition of the UI component (component methods, component constructor, rendering methods, etc.)
 * @return {Component} The resulting Component with renderer
 */
var defineRenderer;
var defineWidget;

module.exports = function defineComponent(def) {
    if (def.___isComponent) {
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

defineRenderer = require("./defineRenderer-legacy");
defineWidget = require("./defineWidget-legacy");
