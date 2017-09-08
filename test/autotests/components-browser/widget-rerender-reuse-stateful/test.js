var expect = require('chai').expect;

module.exports = function(helpers) {
    window.helloInstances = [];

    var component = helpers.mount(require('./index'), {});

    expect(window.helloInstances.length).to.equal(2);

    var helloEls = component.getEl('root').querySelectorAll('.hello');
    expect(helloEls[0].innerHTML).to.equal('Hello Jane');
    expect(helloEls[1].innerHTML).to.equal('Hello John0');

    var hello1 = component.getComponent('hello1');
    var hello2 = component.getComponent('hello2');

    component.state.count++;
    component.update();

    // Make sure no more instances of the nested components were created
    expect(window.helloInstances.length).to.equal(2);

    // Make sure the UI components received the new state as part of onInput()
    expect(hello1.state.name).to.equal('Jane');
    expect(hello2.state.name).to.equal('John1');

    // Make sure the HTML elements were reused
    var helloElsAfter = component.getEl('root').querySelectorAll('.hello');
    expect(helloElsAfter[0]).to.equal(helloEls[0]);
    expect(helloElsAfter[1]).to.equal(helloEls[1]);

    // Make sure the DOM was updated
    expect(helloElsAfter[0].innerHTML).to.equal('Hello Jane');
    expect(helloElsAfter[1].innerHTML).to.equal('Hello John1');
};
