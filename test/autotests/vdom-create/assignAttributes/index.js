
module.exports = function(helpers) {
    var morphAttrs = helpers.vdom.HTMLElement.$__morphAttrs;

    var fromEl = helpers.document.createElement('div');
    var toEl = helpers.vdom.createElement('div', { class: 'foo', 'xlink:href': 'bar.com' });
    morphAttrs(fromEl, toEl);
    return fromEl;
};