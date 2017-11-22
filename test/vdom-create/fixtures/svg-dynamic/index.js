module.exports = function (helpers) {
    var FLAGS = 1;

    return helpers.vdom.createElement('div', { class: 'foo', onclick: 'doSomething()' }, 1 /* childCount */).ed('svg', { width: '100', height: '100', xmlns: 'http://www.w3.org/2000/svg' }, 1) //NO SVG FLAG, from xmlns
    .e('circle', {
        'cx': '50',
        'cy': '50',
        'r': '40',
        'stroke': 'green',
        'stroke-width': '4',
        'fill': 'yellow',
        'xlink:href': 'http://ebay.com/'
    }, 0, FLAGS);
};