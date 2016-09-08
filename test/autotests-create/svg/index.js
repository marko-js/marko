module.exports = function(helpers) {
    return helpers.vdom.createElement('div', 2 /* attrCount */, 1 /* childCount */)
        .a('class', 'foo')
        .a('onclick', 'doSomething()')
        .e('svg', 2, 1)
            .a('width', '100')
            .a('height', '100')
            .e('circle', 7, 0)
                .a('cx', '50')
                .a('cy', '50')
                .a('r', '40')
                .a('stroke', 'green')
                .a('stroke-width', '4')
                .a('fill', 'yellow')
                .a('xlink:href', 'http://ebay.com/');
};