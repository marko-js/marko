module.exports = function(helpers) {
    return helpers.vdom.createElement('div', 2 /* attrCount */, 1 /* childCount */)
        .a('class', 'foo')
        .a('onclick', 'doSomething()')
        .e('span', 1, 1)
            .a('class', 'bar')
            .c('This is a comment')
        .e('p', 0, 0);
};