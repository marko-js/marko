'use strict';

var newTags = {
    'async-fragment':'await',
    'async-fragments':'await-reorderer',
    'async-fragment-placeholder':'await-placeholder',
    'async-fragment-timeout':'await-timeout',
    'async-fragment-error':'await-error'
};

module.exports = function transform(oldNode, context) {
    var oldTag = oldNode.tagName;
    var newTag = newTags[oldTag];
    var provider;
    var varName;
    var argument;

    context.deprecate('The <'+oldTag+'> tag is deprecated.  Please use <'+newTag+'> instead.');

    if(oldTag == 'async-fragment'/* new: <await> */) {
        // need to convert data-provider and var attributes
        // to an argument: <await(var from dataProvider)>
        varName = oldNode.getAttributeValue('var').value;
        provider = oldNode.getAttributeValue('data-provider').toString();
        argument = varName + ' from ' + provider;

        // now remove the attributes
        oldNode.removeAttribute('var');
        oldNode.removeAttribute('data-provider');
    }

    if(oldTag == 'async-fragments'/* new: <await-reorderer> */) {
        // all this tag ever did was handling of client reordering
        // we'll remove the attribute as that's all this new tag does
        oldNode.removeAttribute('client-reorder');
    }

    var newNode = context.createNodeForEl(
        newTag,
        oldNode.getAttributes(),
        argument
    );

    oldNode.replaceWith(newNode);
    oldNode.moveChildrenTo(newNode);
};
