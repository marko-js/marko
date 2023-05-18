function syncBooleanAttrProp(fromEl, toEl, name) {
  if (fromEl[name] !== toEl[name]) {
    fromEl[name] = toEl[name];
    if (fromEl[name]) {
      fromEl.setAttribute(name, "");
    } else {
      fromEl.removeAttribute(name, "");
    }
  }
}

function forEachOption(el, fn, i) {
  var curChild = el.___firstChild;

  while (curChild) {
    if (curChild.___nodeName === "option") {
      fn(curChild, ++i);
    } else {
      i = forEachOption(curChild, fn, i);
    }

    curChild = curChild.___nextSibling;
  }

  return i;
}

// We use a JavaScript class to benefit from fast property lookup
function SpecialElHandlers() {}
SpecialElHandlers.prototype = {
  /**
   * Needed for IE. Apparently IE doesn't think that "selected" is an
   * attribute when reading over the attributes using selectEl.attributes
   */
  option: function (fromEl, toEl) {
    syncBooleanAttrProp(fromEl, toEl, "selected");
  },
  button: function (fromEl, toEl) {
    syncBooleanAttrProp(fromEl, toEl, "disabled");
  },
  /**
   * The "value" attribute is special for the <input> element since it sets
   * the initial value. Changing the "value" attribute without changing the
   * "value" property will have no effect since it is only used to the set the
   * initial value.  Similar for the "checked" attribute, and "disabled".
   */
  input: function (fromEl, toEl) {
    syncBooleanAttrProp(fromEl, toEl, "checked");
    syncBooleanAttrProp(fromEl, toEl, "disabled");

    if (fromEl.value != toEl.___value) {
      fromEl.value = toEl.___value;
    }

    if (fromEl.hasAttribute("value") && !toEl.___hasAttribute("value")) {
      fromEl.removeAttribute("value");
    }
  },

  textarea: function (fromEl, toEl) {
    if (toEl.___preserveTextAreaValue) {
      return;
    }

    var newValue = toEl.___value;
    if (fromEl.value != newValue) {
      fromEl.value = newValue;
    }

    var firstChild = fromEl.firstChild;
    if (firstChild) {
      // Needed for IE. Apparently IE sets the placeholder as the
      // node value and vise versa. This ignores an empty update.
      var oldValue = firstChild.nodeValue;

      if (
        oldValue == newValue ||
        (!newValue && oldValue == fromEl.placeholder)
      ) {
        return;
      }

      firstChild.nodeValue = newValue;
    }
  },
  select: function (fromEl, toEl) {
    if (!toEl.___hasAttribute("multiple")) {
      var selected = 0;
      forEachOption(
        toEl,
        function (option, i) {
          if (option.___hasAttribute("selected")) {
            selected = i;
          }
        },
        -1
      );

      if (fromEl.selectedIndex !== selected) {
        fromEl.selectedIndex = selected;
      }
    }
  }
};

module.exports = new SpecialElHandlers();
