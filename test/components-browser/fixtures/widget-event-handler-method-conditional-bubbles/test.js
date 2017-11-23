var expect = require('chai').expect;

module.exports = function (helpers) {
   var component = helpers.mount(require('./index'), {});

   helpers.triggerClick(component.getEl('inputWithoutHandler'));
   expect(component.clicked).to.equal(false);

   helpers.triggerClick(component.getEl('inputWithHandler'));
   expect(component.clicked).to.equal(true);

   // Reset component.clicked
   component.clicked = false;

   helpers.triggerClick(component.getEl('inputWithLiteralHandler'));
   expect(component.clicked).to.equal(true);
};