module.exports = function(helpers) {
    var root = helpers.vdom.createElement("div", { class: "root" });

    root.e("div", { class: "first-child" });

    root.___appendDocumentFragment();

    root.e("div", { class: "last-child" });

    return root;
};
