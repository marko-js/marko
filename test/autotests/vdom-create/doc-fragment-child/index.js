module.exports = function(helpers) {
    var root = helpers.vdom.createElement('div', { class: 'root' });

    var docFragment = helpers.vdom.createDocumentFragment();

    var div1 = helpers.vdom.createElement('div', {
        class: 'foo1',
        onclick: 'doSomething()'
    });

    var div2 = helpers.vdom.createElement('div', {
        class: 'foo2'
    });

    docFragment.appendChild(div1);
    docFragment.appendChild(div2);

    root.appendChild(docFragment);

    return root;
};