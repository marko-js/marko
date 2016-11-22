'use strict';

module.exports = function transform(el, context) {
    // Make <await-reorderer> optional. Automatically insert it before the
    // body tag.
    let awaitReorderer = context.createNodeForEl('await-reorderer');
    el.appendChild(awaitReorderer);

    let initWidgetsNode = context.createNodeForEl('init-widgets');
    el.appendChild(initWidgetsNode);
};