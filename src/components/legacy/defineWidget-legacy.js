module.exports = function defineWidget(def, renderer) {
    if (def.___isComponent) {
        return def;
    }

    if (renderer) {
        return {
            ___isComponent: true,
            renderer: renderer,
            render: renderer.render,
            renderSync: renderer.renderSync,
            template: renderer.template
        };
    } else {
        return { ___isComponent: true };
    }
};
