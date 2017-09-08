
module.exports = function(helpers) {
    var morphAttrs = helpers.vdom.VElement.___morphAttrs;

    var fromEl = helpers.document.createElement('div');
    var vFromEl = helpers.vdom.virtualizeElement(fromEl);
    var toEl = helpers.vdom.createElement('div', { class: 'foo', 'xlink:href': 'bar.com' });
    morphAttrs(fromEl, vFromEl, toEl);
    return fromEl;
};
