module.exports = function(helpers) {
    return helpers.vdom.createElement('div', 2 /* attrCount */, 0 /* childCount */)
        .a('class', 'foo')
        .a('onclick', 'doSomething()');
};