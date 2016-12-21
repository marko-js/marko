var Text = require('./Text');
var DocumentFragment = require('./DocumentFragment');
var virtualize = require('./virtualize');
var specialHtmlRegexp = /[&<]/;

var range;

module.exports = function virtualizeHTML(html, doc) {
    if (!specialHtmlRegexp.test(html)) {
        return new Text(html);
    }

    if (!range && doc.createRange) {
        range = doc.createRange();
        range.selectNode(doc.body);
    }

    var vdomFragment;

    var fragment;
    if (range && range.createContextualFragment) {
        fragment = range.createContextualFragment(html);
        vdomFragment = virtualize(fragment);
    } else {
        var container = doc.createElement('body');
        container.innerHTML = html;
        vdomFragment = new DocumentFragment();

        var curChild = container.firstChild;
        while(curChild) {
            vdomFragment.$__appendChild(virtualize(curChild));
            curChild = curChild.nextSibling;
        }
    }

    return vdomFragment;
};