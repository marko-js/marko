module.exports = function(helpers) {
    var root = helpers.vdom.createDocumentFragment();

    var docFragmentA = helpers.vdom.createDocumentFragment();

    var docFragmentAA = helpers.vdom.createDocumentFragment();
    docFragmentA.appendChild(docFragmentAA);

    var docFragmentB = helpers.vdom.createDocumentFragment();

    var docFragmentBB = helpers.vdom.createDocumentFragment();
    docFragmentB.appendChild(docFragmentBB);

    docFragmentBB.appendChild(helpers.vdom.createText('bb1'));
    docFragmentBB.appendChild(helpers.vdom.createText('bb2'));

    root.appendChild(docFragmentA);
    root.appendChild(docFragmentB);

    return root.actualize(helpers.document);
};