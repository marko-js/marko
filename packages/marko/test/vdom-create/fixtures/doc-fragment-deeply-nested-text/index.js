module.exports = function(helpers) {
    var root = helpers.vdom.createDocumentFragment();

    var docFragmentA = helpers.vdom.createDocumentFragment();

    var docFragmentAA = helpers.vdom.createDocumentFragment();
    docFragmentA.___appendChild(docFragmentAA);

    docFragmentAA.___appendChild(helpers.vdom.createText("aa1"));
    docFragmentAA.___appendChild(helpers.vdom.createText("aa2"));

    var docFragmentB = helpers.vdom.createDocumentFragment();

    var docFragmentBB = helpers.vdom.createDocumentFragment();
    docFragmentB.___appendChild(docFragmentBB);

    docFragmentBB.___appendChild(helpers.vdom.createText("bb1"));
    docFragmentBB.___appendChild(helpers.vdom.createText("bb2"));

    root.___appendChild(docFragmentA);
    root.___appendChild(docFragmentB);

    return root;
};
