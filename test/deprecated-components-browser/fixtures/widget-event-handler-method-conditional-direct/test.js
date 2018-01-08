var expect = require('chai').expect;

module.exports = function (helpers) {
   var widget = helpers.mount(require('./index'), {});

   helpers.triggerMouseMove(widget.getEl('inputWithoutHandler'));
   expect(widget.mouseMoved).to.equal(false);

   helpers.triggerMouseMove(widget.getEl('inputWithHandler'));
   expect(widget.mouseMoved).to.equal(true);

   // Reset widget.mouseMoved
   widget.mouseMoved = false;

   helpers.triggerMouseMove(widget.getEl('inputWithLiteralHandler'));
   expect(widget.mouseMoved).to.equal(true);
};