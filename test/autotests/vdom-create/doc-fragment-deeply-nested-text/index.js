module.exports = function(helpers) {
    var root = helpers.vdom.createDocumentFragment();

    var docFragmentA = helpers.vdom.createDocumentFragment();

    var docFragmentAA = helpers.vdom.createDocumentFragment();
    docFragmentA.$__appendChild(docFragmentAA);

    docFragmentAA.$__appendChild(helpers.vdom.createText('aa1'));
    docFragmentAA.$__appendChild(helpers.vdom.createText('aa2'));

    var docFragmentB = helpers.vdom.createDocumentFragment();

    var docFragmentBB = helpers.vdom.createDocumentFragment();
    docFragmentB.$__appendChild(docFragmentBB);

    docFragmentBB.$__appendChild(helpers.vdom.createText('bb1'));
    docFragmentBB.$__appendChild(helpers.vdom.createText('bb2'));

    root.$__appendChild(docFragmentA);
    root.$__appendChild(docFragmentB);

    return root.actualize(helpers.document);
};