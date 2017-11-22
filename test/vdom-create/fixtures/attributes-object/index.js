module.exports = function (helpers) {
    return helpers.vdom.createElement('div', null, 2 /* childCount */).e('span', null, 1).e('p', { class: 'foo', id: 'bar' }, 0).e('a', null, 0);
};