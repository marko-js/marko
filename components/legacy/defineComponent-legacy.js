/**
 * Define a new UI component that includes component and renderer.
 *
 * @param  {Object} def The definition of the UI component (component methods, component constructor, rendering methods, etc.)
 * @return {Component} The resulting Component with renderer
 */
var defineRenderer;
var defineComponent;

module.exports = function defineComponent(def) {
    if (def.$__isComponent) {
        return def;
    }

    var renderer;

    if (def.template || def.renderer) {
        renderer = defineRenderer(def);
    } else {
        throw new Error('Expected "template" or "renderer"');
    }

    return defineComponent(def, renderer);
};

defineRenderer = require('./defineRenderer-legacy');
defineComponent = require('./defineComponent-legacy');

