var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget = helpers.mount(require('./index'), {});

    var helloEl = widget.getEl('hello');
    expect(helloEl.innerHTML).to.equal('Hello Joe!');

    widget.el.style.border = "1px solid red";
    widget.el.className = "foo";

    widget.el.querySelector('a').href = "http://www.foo.com/";

    widget.getEl('hello2').removeAttribute('class');

    widget.setState('name', 'Frank');
    widget.update();

    expect(helloEl.innerHTML).to.equal('Hello Frank!');
    expect(widget.getEl('hello2').getAttribute('class')).to.equal(null);

    // Make sure the preserved attributes did not change
    expect(widget.el.style.border).to.equal("1px solid red");
    expect(widget.el.className).to.equal("foo");
    expect(widget.el.querySelector('a').href).to.equal("http://www.foo.com/");
};