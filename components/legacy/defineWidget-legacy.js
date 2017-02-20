module.exports = function defineWidget(def, renderer) {
    if (def.$__isComponent) {
        return def;
    }

    if (renderer) {
        return {
            $__isComponent: true,
            renderer: renderer,
            render: renderer.render,
            renderSync: renderer.renderSync,
            template: renderer.template
        };
    } else {
        return {$__isComponent: true};
    }
};
