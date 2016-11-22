var expect = require('chai').expect;
module.exports = function(helpers) {
    var div = helpers.vdom.createElement('div', null, 1 /* childCount */)
        .e('span', { class: 'bar' }, 0);

    expect(div.firstChild.nodeName).to.equal('span');

    div.removeChildren();
    expect(div.firstChild).to.equal(undefined);
    expect(div.childNodes.length).to.equal(0);

    var newChild = helpers.vdom.createElement('h1', null, 1)
        .t('New child');

    div.appendChild(newChild);

    expect(div.firstChild).to.equal(newChild);
    expect(div.childNodes.length).to.equal(1);

    return div;
};