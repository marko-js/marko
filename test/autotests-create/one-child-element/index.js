module.exports = function(helpers) {
    return helpers.vdom.createElement('div', 2 /* attrCount */, 1 /* childCount */)
        .a('class', 'foo')
        .a('onclick', 'doSomething()')
        .e('span', 1, 0)
            .a('class', 'bar');
};