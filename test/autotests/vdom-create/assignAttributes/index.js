module.exports = function(helpers) {
    var targetEl = helpers.document.createElement('div');
    var virtualEl = helpers.vdom.createElement('div', { class: 'foo', 'xlink:href': 'bar.com' });
    virtualEl.assignAttributes(targetEl);
    return targetEl;
};