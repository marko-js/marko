/**
 * Define a new UI component that includes widget and renderer.
 *
 * @param  {Object} def The definition of the UI component (widget methods, widget constructor, rendering methods, etc.)
 * @return {Widget} The resulting Widget with renderer
 */
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

var defineRenderer = require('./defineRenderer');
var defineWidget = require('./defineWidget');

