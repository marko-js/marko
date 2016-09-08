module.exports = function(helpers) {
    var attributes = helpers.vdom.createAttributes()
        .as({ class: 'foo', id: 'bar' });

    return helpers.vdom.createElement('div', 0 /* attrCount */, 2 /* childCount */)
        .e('span', 0, 1)
            .e('p', null, 0)
                .as(attributes)
        .e('a', 0, 0);
};