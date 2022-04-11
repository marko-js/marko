_dynamicTag(_scope, input.test, {
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

import { classAttr as _classAttr, write as _write, dynamicTag as _dynamicTag, queue as _queue, createRenderer as _createRenderer, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { apply as _customTag, template as _customTag_template, walks as _customTag_walks } from "./components/custom-tag.marko";

function _applyWith_c_d(_scope, c = _scope[1], d = _scope[2]) {
  _classAttr(_scope[0], ["a", {
    b: c,
    d
  }]);
}

function _apply_input(_scope, input) {
  if (_write(_scope, 5, input)) {
    const {
      c,
      d
    } = input;

    _apply_c(c);

    _apply_d(d);
  }
}

function _apply_d(_scope, d) {
  if (_write(_scope, 2, d)) _queue(_scope, _applyWith_c_d, 3);
}

function _apply_c(_scope, c) {
  if (_write(_scope, 1, c)) _queue(_scope, _applyWith_c_d, 3);
}

function _apply(_scope) {
  _customTag(_scope[3]);

  _customTag(_scope[4]);
}

export const applyAttrs = function (_scope, input) {
  _apply_input(_scope, input);
};
export { _apply_input };
export const template = `<div></div><div class="a b"></div><div class="a b c"></div>${_customTag_template}${_customTag_template}`;
export const walks =
/* get, over(3), beginChild(3), _customTag_walks, endChild, beginChild(4), _customTag_walks, endChild */
` d2${_customTag_walks}&3${_customTag_walks}&`;
export const apply = _apply;

const _temp = _createRenderer("", "", null);

export default _createRenderFn(template, walks, apply, applyAttrs);