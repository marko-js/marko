'use strict';

module.exports = function transform(el, context) {
    var initWidgetsNode = context.createNodeForEl('init-widgets');
    el.appendChild(initWidgetsNode);
};