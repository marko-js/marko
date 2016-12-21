module.exports = function(helpers) {
    var root = helpers.vdom.createElement('div', {class: 'root'});

    var docFragment = helpers.vdom.createDocumentFragment();

    var div1 = helpers.vdom.createElement('div', {
        class: 'foo1',
        onclick: 'doSomething()'
    });

    var div2 = helpers.vdom.createElement('div', { class: 'foo2' });

    docFragment.$__appendChild(div1);
    docFragment.$__appendChild(div2);

    root.$__appendChild(docFragment);
    root.$__appendChild(helpers.vdom.createElement('div', { class: 'sibling' }));

    return root;
};