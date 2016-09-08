module.exports = function(helpers) {
    var root = helpers.vdom.createElement('div', 1 /* attrCount */)
        .a('class', 'root');

    var docFragment = helpers.vdom.createDocumentFragment();

    var div1 = helpers.vdom.createElement('div', 2 /* attrCount */)
        .a('class', 'foo1')
        .a('onclick', 'doSomething()');

    var div2 = helpers.vdom.createElement('div', 1 /* attrCount */)
        .a('class', 'foo2');

    docFragment.appendChild(div1);
    docFragment.appendChild(div2);

    root.appendChild(docFragment);

    root.appendChild(helpers.vdom.createElement('div', 1 /* attrCount */)
        .a('class', 'sibling'));

    return root;
};