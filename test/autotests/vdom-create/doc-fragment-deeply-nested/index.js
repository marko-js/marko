module.exports = function(helpers) {
    var root = helpers.vdom.createDocumentFragment();

    var docFragmentA = helpers.vdom.createDocumentFragment();

    var docFragmentAA = helpers.vdom.createDocumentFragment();
    docFragmentA.appendChild(docFragmentAA);

    docFragmentAA.appendChild(helpers.vdom.createElement('div', { class: 'aa1' }));
    docFragmentAA.appendChild(helpers.vdom.createElement('div', { class: 'aa2' }));

    var docFragmentB = helpers.vdom.createDocumentFragment();
    docFragmentB.appendChild(helpers.vdom.createElement('div', { class: 'b1' }));
    docFragmentB.appendChild(helpers.vdom.createElement('div', { class: 'b2' }));

    root.appendChild(docFragmentA);
    root.appendChild(docFragmentB);

    return root;
};