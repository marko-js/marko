var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  function getTimestamps() {
    return {
      preserveId: component.getEl("preserve").getAttribute("data-renderId"),
      preserveIdBody: component.getEl("preserve").innerHTML,
      preserveBodyId: component
        .getEl("preserveBody")
        .getAttribute("data-renderId"),
      preserveBodyIdBody: component.getEl("preserveBody").innerHTML,
      componentId: component.getComponent("component").state.name,
      preserveClass: component.el
        .querySelector(".preserve")
        .getAttribute("data-renderId"),
      preserveClassBody: component.el.querySelector(".preserve").innerHTML,
      preserveBodyClass: component.el
        .querySelector(".preserve-body")
        .getAttribute("data-renderId"),
      preserveBodyClassBody:
        component.el.querySelector(".preserve-body").innerHTML,
      componentClass: require("marko/components").getComponentForEl(
        component.el.querySelector(".component-no-id"),
      ).state.name,
    };
  }

  var renderId = 10;

  component.input = {
    preserveCondition: true,
    renderId: renderId,
  };
  component.update();

  var timestamps = getTimestamps();
  assert.equal(timestamps.preserveId, "0");
  assert.equal(timestamps.preserveIdBody, "0");
  assert.equal(timestamps.preserveBodyId, "10");
  assert.equal(timestamps.preserveBodyIdBody, "0");
  assert.equal(timestamps.componentId, "0");
  assert.equal(timestamps.preserveClass, "0");
  assert.equal(timestamps.preserveClassBody, "0");
  assert.equal(timestamps.preserveBodyClass, "10");
  assert.equal(timestamps.preserveBodyClassBody, "0");
  assert.equal(timestamps.componentClass, "0");

  // assert.equal(newEls1.el != null, true);
  // assert.equal(newEls1.el, origEls.el);
  // assert.equal(newEls1.preserveEl1, origEls.preserveEl1);
  // assert.equal(newEls1.preserveEl2, origEls.preserveEl2);
  // assert.equal(newEls1.preserveEl1, origEls.preserveEl1);
  // assert.equal(newEls1.preserveEl2, origEls.preserveEl2);
  //
  //
  // assert.equal(newEls1.preserveBodyEl1, origEls.preserveBodyEl1);
  // assert.equal(newEls1.preserveBodyEl2, origEls.preserveBodyEl2);
  //
  // checkChildrenMatch(newEls1.preserveBodyEl1Children, origEls.preserveBodyEl1Children);
  // checkChildrenMatch(newEls1.preserveBodyEl2Children, origEls.preserveBodyEl2Children);
  //
  // assert.equal(newEls1.helloEl1, origEls.helloEl1);
  // assert.equal(newEls1.helloEl2, origEls.helloEl2);

  renderId = 100;

  // Do not preserve
  component.input = {
    preserveCondition: false,
    renderId: renderId,
  };
  component.update();

  timestamps = getTimestamps();
  assert.equal(timestamps.preserveId, "100");
  assert.equal(timestamps.preserveIdBody, "100");
  assert.equal(timestamps.preserveBodyId, "100");
  assert.equal(timestamps.preserveBodyIdBody, "100");
  assert.equal(timestamps.componentId, "100");
  assert.equal(timestamps.preserveClass, "100");
  assert.equal(timestamps.preserveClassBody, "100");
  assert.equal(timestamps.preserveBodyClass, "100");
  assert.equal(timestamps.preserveBodyClassBody, "100");
  assert.equal(timestamps.componentClass, "100");
};
