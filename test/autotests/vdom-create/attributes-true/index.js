module.exports = function(helpers) {
    var virtualEl = helpers.vdom.createElement('select', null, 1 /* childCount */)
        .e('option', { selected: true }, 0);

    return virtualEl.actualize(helpers.document);
};