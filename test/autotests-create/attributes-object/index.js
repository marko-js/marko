module.exports = function(helpers) {
    return helpers.vdom.createElement('div', 0 /* attrCount */, 2 /* childCount */)
        .e('span', 0, 1)
            .e('p', 1, 0)
            .as({ class: 'foo', id: 'bar' })
        .e('a', 0, 0);
};