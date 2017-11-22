var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {});

    expect(component.el.childNodes.length).to.equal(1);
    expect(component.el.firstChild.nodeName).to.equal('INPUT');
    expect(component.el.firstChild.value).to.equal('x');

    component.state.html = '<textarea>HELLO WORLD!</textarea>';
    component.update();

    expect(component.el.childNodes.length).to.equal(1);
    expect(component.el.firstChild.nodeName).to.equal('TEXTAREA');
    expect(component.el.firstChild.value).to.equal('HELLO WORLD!');

    component.state.html = '<select><option value="1">One</option><option value="2" selected>Two</option></select>';
    component.update();

    expect(component.el.childNodes.length).to.equal(1);
    expect(component.el.firstChild.nodeName).to.equal('SELECT');
    expect(component.el.firstChild.selectedIndex).to.equal(1);
};