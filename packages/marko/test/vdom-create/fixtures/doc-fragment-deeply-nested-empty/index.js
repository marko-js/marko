module.exports = function(helpers) {
    var root = helpers.vdom.createDocumentFragment();

    var docFragmentA = helpers.vdom.createDocumentFragment();

    var docFragmentAA = helpers.vdom.createDocumentFragment();
    docFragmentA.___appendChild(docFragmentAA);

    var docFragmentB = helpers.vdom.createDocumentFragment();

    var docFragmentBB = helpers.vdom.createDocumentFragment();
    docFragmentB.___appendChild(docFragmentBB);

    docFragmentBB.___appendChild(helpers.vdom.createText("bb1"));
    docFragmentBB.___appendChild(helpers.vdom.createText("bb2"));

    root.___appendChild(docFragmentA);
    root.___appendChild(docFragmentB);

    return root;
};
