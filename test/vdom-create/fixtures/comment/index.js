module.exports = function (helpers) {
    return helpers.vdom.createElement('div', {
        class: 'foo',
        onclick: 'doSomething()'
    }, 1 /* childCount */).e('span', { class: 'bar' }, 1).c('This is a comment').e('p', 0, 0);
};