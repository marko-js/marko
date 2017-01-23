module.exports = function(helpers) {
    var root = helpers.vdom.createDocumentFragment();

    var docFragmentA = helpers.vdom.createDocumentFragment();

    var docFragmentAA = helpers.vdom.createDocumentFragment();
    docFragmentA.$__appendChild(docFragmentAA);

    docFragmentAA.$__appendChild(helpers.vdom.createElement('div', { class: 'aa1' }));
    docFragmentAA.$__appendChild(helpers.vdom.createElement('div', { class: 'aa2' }));

    var docFragmentB = helpers.vdom.createDocumentFragment();
    docFragmentB.$__appendChild(helpers.vdom.createElement('div', { class: 'b1' }));
    docFragmentB.$__appendChild(helpers.vdom.createElement('div', { class: 'b2' }));

    root.$__appendChild(docFragmentA);
    root.$__appendChild(docFragmentB);

    return root;
};