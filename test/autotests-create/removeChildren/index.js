var expect = require('chai').expect;
module.exports = function(helpers) {
    var div = helpers.vdom.createElement('div', 2 /* attrCount */, 1 /* childCount */)
        .a('class', 'foo')
        .a('onclick', 'doSomething()')
        .e('span', 1, 0)
            .a('class', 'bar');

    expect(div.firstChild.nodeName).to.equal('span');

    div.removeChildren();
    expect(div.firstChild).to.equal(undefined);
    expect(div.childNodes.length).to.equal(0);

    var newChild = helpers.vdom.createElement('h1', 0, 1)
        .t('New child');

    div.appendChild(newChild);

    expect(div.firstChild).to.equal(newChild);
    expect(div.childNodes.length).to.equal(1);

    return div;
};