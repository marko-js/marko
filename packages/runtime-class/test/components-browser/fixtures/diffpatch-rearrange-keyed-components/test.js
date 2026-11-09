var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  var previousComponents = {};

  function checkOrder(letters) {
    component.input = { letters: letters };
    component.update();

    var divs = component.getEl("root").querySelectorAll("div");

    assert.equal(divs.length, letters.length);

    var newComponents = {};

    for (var i = 0; i < letters.length; i++) {
      var letter = letters[i];

      var componentForValue = component.getComponent(letter);
      assert.equal(componentForValue != null, true);
      newComponents[letter] = componentForValue;

      if (previousComponents[letter]) {
        assert.equal(previousComponents[letter], componentForValue);
      }

      assert.equal(divs[i].id, letter);
      assert.equal(divs[i].innerHTML, letter);
    }

    Object.keys(previousComponents).forEach(function (letter) {
      if (!(letter in newComponents)) {
        assert.equal(previousComponents[letter].isDestroyed(), true);
      }
    });

    previousComponents = newComponents;
  }

  checkOrder(["a", "b", "c", "d", "e"]);

  // Single component swap
  checkOrder(["a", "c", "b", "d", "e"]);

  // Single component removal (remove 'C')
  checkOrder(["a", "b", "d", "e"]);

  // Single component addition
  checkOrder(["a", "b", "c", "d", "e"]);

  // Double component addition
  checkOrder(["a", "b", "b1", "b2", "c", "d", "e"]);

  // Double component removal
  checkOrder(["a", "b", "c", "d", "e"]);

  // Swap b and d
  checkOrder(["a", "d", "c", "b", "e"]);

  // Swap b and d back to normal
  checkOrder(["a", "b", "c", "d", "e"]);

  // Swap a and c
  checkOrder(["c", "b", "a", "d", "e"]);

  // Swap c and a back to normal
  checkOrder(["a", "b", "c", "d", "e"]);

  // Single component addition to START
  checkOrder(["1", "a", "b", "c", "d", "e"]);

  // Double component addition to START
  checkOrder(["3", "2", "1", "a", "b", "c", "d", "e"]);

  // Single component removal from START
  checkOrder(["2", "1", "a", "b", "c", "d", "e"]);

  // Double component removal from START
  checkOrder(["a", "b", "c", "d", "e"]);

  // Single component addition to END
  checkOrder(["a", "b", "c", "d", "e", "f"]);

  // Double component addition to END
  checkOrder(["a", "b", "c", "d", "e", "f", "g", "h"]);

  // Single component removal from END
  checkOrder(["a", "b", "c", "d", "e", "f", "g"]);

  // Double component removal from END
  checkOrder(["a", "b", "c", "d", "e"]);
};
