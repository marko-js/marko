var expect = require('chai').expect;

module.exports = function (helpers) {
   var widget = helpers.mount(require('./index'), {});

   helpers.triggerClick(widget.getEl('inputWithoutHandler'));
   expect(widget.clicked).to.equal(false);

   helpers.triggerClick(widget.getEl('inputWithHandler'));
   expect(widget.clicked).to.equal(true);

   // Reset widget.clicked
   widget.clicked = false;

   helpers.triggerClick(widget.getEl('inputWithLiteralHandler'));
   expect(widget.clicked).to.equal(true);
};