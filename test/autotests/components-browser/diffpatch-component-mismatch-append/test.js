var expect = require('chai').expect;

module.exports = function(helpers) {
    var component = helpers.mount(require('./index'), { });

    var children;

    children = component.getEl('root').children;
    expect(children.length).to.equal(2);
    expect(children[0].innerHTML).to.equal('foo-a');
    expect(children[1].innerHTML).to.equal('bar-b');

    component.state.count++;
    component.update();

    children = component.getEl('root').children;
    expect(children.length).to.equal(3);
    expect(children[0].innerHTML).to.equal('foo-a');
    expect(children[1].innerHTML).to.equal('foo-b');
    expect(children[2].innerHTML).to.equal('bar-c');
};
