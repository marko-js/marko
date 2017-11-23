var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {});

    var helloEl = component.getEl('hello');
    expect(helloEl.innerHTML).to.equal('Hello Joe!');

    component.el.style.border = "1px solid red";
    component.el.className = "foo";

    component.el.querySelector('a').href = "http://www.foo.com/";

    component.getEl('hello2').removeAttribute('class');

    component.setState('name', 'Frank');
    component.update();

    expect(helloEl.innerHTML).to.equal('Hello Frank!');
    expect(component.getEl('hello2').getAttribute('class')).to.equal(null);

    // Make sure the preserved attributes did not change
    expect(component.el.style.border).to.equal("1px solid red");
    expect(component.el.className).to.equal("foo");
    expect(component.el.querySelector('a').href).to.equal("http://www.foo.com/");
};