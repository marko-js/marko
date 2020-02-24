module.exports = function(helpers) {
    var virtualEl = helpers.vdom
        .createElement("select", null, null, null, 1 /* childCount */)
        .e("option", { selected: true }, null, null, 0);

    return virtualEl;
};
