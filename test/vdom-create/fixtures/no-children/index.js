module.exports = function (helpers) {
    return helpers.vdom.createElement('div', { class: 'foo', onclick: 'doSomething()' }, 0 /* childCount */);
};