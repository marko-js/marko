module.exports = function(helpers) {
    var root = helpers.vdom.createElement('div')
        .as({ class: 'root' });

    root.e('div')
        .as({ class: 'first-child' });

    var docFragment = root.beginAsync();
    docFragment.appendChild(helpers.vdom.createElement('div')
        .as({ class: 'middle-child' }));

    root.e('div')
        .as({ class: 'last-child' });

    return root;
};