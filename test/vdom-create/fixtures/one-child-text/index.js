module.exports = function (helpers) {
    return helpers.vdom.createElement('div', { class: 'foo' }, 1 /* childCount */).t('Hello World!');
};