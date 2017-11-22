var expect = require('chai').expect;

module.exports = function (helpers) {
   var component = helpers.mount(require('./index'), {});

   helpers.triggerMouseMove(component.getEl('inputWithoutHandler'));
   expect(component.mouseMoved).to.equal(false);

   helpers.triggerMouseMove(component.getEl('inputWithHandler'));
   expect(component.mouseMoved).to.equal(true);

   // Reset component.mouseMoved
   component.mouseMoved = false;

   helpers.triggerMouseMove(component.getEl('inputWithLiteralHandler'));
   expect(component.mouseMoved).to.equal(true);
};