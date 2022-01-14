_customTag({
  class: ["a", {
    b: c,
    d
  }]
});

_customTag({
  class: ["a", false, "b"]
});

_dynamicTag(input.test, {
  class: ["a", {
    b: c,
    d
  }],
  test: {
    class: ["a", {
      b: c,
      d
    }],

    renderBody() {
      _write("Hello");
    }

  }
});

import { classAttr as _classAttr, queue as _queue, write as _write, dynamicTag as _dynamicTag, read as _read, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { hydrate as _customTag, template as _customTag_template, walks as _customTag_walks } from "./components/custom-tag.marko";

function _apply_input(input) {
  if (_write(1, input)) {
    const {
      c,
      d
    } = input;

    _apply_c(c);

    _apply_d(d);
  }
}

function _apply_c(c) {
  if (_write(2, c)) _queue(_applyWith_d_c, 2);
}

function _apply_d(d) {
  if (_write(3, d)) _queue(_applyWith_d_c, 3);
}

function _applyWith_d_c(d = _read(3), c = _read(2)) {
  _classAttr(0, ["a", {
    b: c,
    d
  }]);
}

export const template = `<div></div><div class="a b"></div><div class="a b c"></div>${_customTag_template}${_customTag_template}`;
export const walks = ` ${_customTag_walks}${_customTag_walks}`;
export const apply = _apply_input;
export default _createRenderFn(template, walks, apply);