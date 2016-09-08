module.exports = function(helpers) {
    var root = helpers.vdom.createElement('div')
        .as({ class: 'root' });

    root.e('div')
        .as({ class: 'first-child' });

    root.appendDocumentFragment();

    root.e('div')
        .as({ class: 'last-child' });

    return root;
};