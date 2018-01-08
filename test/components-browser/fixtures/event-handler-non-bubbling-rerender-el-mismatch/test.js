var expect = require('chai').expect;

module.exports = function (helpers) {
   var component = helpers.mount(require('./index'), {});

   expect(component.mouseMoveEvent).to.equal(undefined);

   var rootEl = helpers.targetEl.querySelector('div');
   helpers.triggerMouseMove(rootEl);
   expect(component.mouseMoveEvent).to.equal(true);

   component.state.div = false;
   component.update();

   expect(helpers.targetEl.querySelector('div') == null).to.equal(true);

   component.mouseMoveEvent = undefined;

   rootEl = helpers.targetEl.querySelector('span');
   helpers.triggerMouseMove(rootEl);
   expect(component.mouseMoveEvent).to.equal(true);
};