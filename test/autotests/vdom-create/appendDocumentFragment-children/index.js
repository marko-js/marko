module.exports = function(helpers) {
    var root = helpers.vdom.createElement('div', { class: 'root' });

    root.e('div', { class: 'first-child' });

    var docFragment = root.___appendDocumentFragment();
    docFragment.___appendChild(helpers.vdom.createElement('div', { class: 'middle-child' }));

    root.e('div', { class: 'last-child' });

    return root;
};