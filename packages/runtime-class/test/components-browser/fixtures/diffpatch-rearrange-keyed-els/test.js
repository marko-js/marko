var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});
  assert.equal(helpers.targetEl.querySelectorAll("div").length, 0);

  function checkOrder(letters) {
    component.input = { letters: letters };
    component.update();

    var divs = helpers.targetEl.querySelectorAll("div");

    assert.equal(divs.length, letters.length);

    for (var i = 0; i < letters.length; i++) {
      assert.equal(divs[i].id, letters[i]);
      assert.equal(divs[i].innerHTML, letters[i]);
    }
  }

  checkOrder(["a", "b", "c", "d", "e"]);

  // Single element swap
  checkOrder(["a", "c", "b", "d", "e"]);

  // Single element removal
  checkOrder(["a", "b", "d", "e"]);

  // Single element addition
  checkOrder(["a", "b", "c", "d", "e"]);

  // Double element addition
  checkOrder(["a", "b", "b1", "b2", "c", "d", "e"]);

  // Double element removal
  checkOrder(["a", "b", "c", "d", "e"]);

  // Swap b and d
  checkOrder(["a", "d", "c", "b", "e"]);

  // Swap b and d back to normal
  checkOrder(["a", "b", "c", "d", "e"]);

  // Single element addition to START
  checkOrder(["1", "a", "b", "c", "d", "e"]);

  // Double element addition to START
  checkOrder(["3", "2", "1", "a", "b", "c", "d", "e"]);

  // Single element removal from START
  checkOrder(["2", "1", "a", "b", "c", "d", "e"]);

  // Double element removal from START
  checkOrder(["a", "b", "c", "d", "e"]);

  // Single element addition to END
  checkOrder(["a", "b", "c", "d", "e", "f"]);

  // Double element addition to END
  checkOrder(["a", "b", "c", "d", "e", "f", "g", "h"]);

  // Single element removal from END
  checkOrder(["a", "b", "c", "d", "e", "f", "g"]);

  // Double element removal from END
  checkOrder(["a", "b", "c", "d", "e"]);
};
