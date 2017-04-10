'use strict';

module.exports = function transform(el, context) {
    let initComponentsNode = context.createNodeForEl('init-components');
    el.appendChild(initComponentsNode);

    // Make <await-reorderer> optional. Automatically insert it before the
    // body tag.
    let awaitReorderer = context.createNodeForEl('await-reorderer');
    el.appendChild(awaitReorderer);
};
