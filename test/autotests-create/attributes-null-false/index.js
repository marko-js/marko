module.exports = function(helpers) {
    return helpers.vdom.createElement('div', 0 /* attrCount */, 2 /* childCount */)
        .e('span', 0, 1)
            .e('p', null, 0)
                .as({ class: 'foo', id: 'bar', title: null, 'data-bar': false, 'checked': true })
        .e('a', 0, 0);
};