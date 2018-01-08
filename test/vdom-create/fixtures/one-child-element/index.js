module.exports = function (helpers) {
    return helpers.vdom.createElement('div', { class: 'foo' }, 1 /* childCount */).e('span', { class: 'bar' }, 0);
};