module.exports = function defineWidget(def, renderer) {
    if (def.$__isWidget) {
        return def;
    }

    if (renderer) {
        return {
            $__isWidget: true,
            renderer: renderer,
            render: renderer.render,
            renderSync: renderer.renderSync,
            template: renderer.template
        };
    } else {
        return {$__isWidget: true};
    }
};
