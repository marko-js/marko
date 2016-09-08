module.exports = function(helpers) {
    var attributes = helpers.vdom.createAttributes()
        .as({ class: 'foo', id: 'bar' });

    return helpers.vdom.createElement('div', 0 /* attrCount */, 2 /* childCount */)
        .e('span', 0, 1)
            .e('p', null, 1)
                .as(attributes)
                .e('span', 1, 0)
                    .a('class', 'leaf')
        .e('a', 0, 0);
};