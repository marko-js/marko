module.exports = function(helpers) {
    var root = helpers.vdom.createDocumentFragment();

    var docFragmentA = helpers.vdom.createDocumentFragment();

    var docFragmentAA = helpers.vdom.createDocumentFragment();
    docFragmentA.___appendChild(docFragmentAA);

    docFragmentAA.___appendChild(
        helpers.vdom.createElement("div", { class: "aa1" })
    );
    docFragmentAA.___appendChild(
        helpers.vdom.createElement("div", { class: "aa2" })
    );

    var docFragmentB = helpers.vdom.createDocumentFragment();
    docFragmentB.___appendChild(
        helpers.vdom.createElement("div", { class: "b1" })
    );
    docFragmentB.___appendChild(
        helpers.vdom.createElement("div", { class: "b2" })
    );

    root.___appendChild(docFragmentA);
    root.___appendChild(docFragmentB);

    return root;
};
