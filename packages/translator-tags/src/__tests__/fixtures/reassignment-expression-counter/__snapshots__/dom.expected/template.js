export const _template_ = "<button id=addTwo> </button><button id=triple> </button><button id=cube> </button>";
export const _walks_ = /* get, next(1), get, out(1), get, next(1), get, out(1), get, next(1), get, out(1) */" D l D l D l";
import { on as _on, data as _data, queueSource as _queueSource, register as _register, queueEffect as _queueEffect, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _onClick = _scope => {
  const {
    count
  } = _scope;
  return function () {
    _queueSource(_scope, _count, count + 2);
  };
};
const _onClick2 = _scope => {
  const {
    count
  } = _scope;
  return function () {
    _queueSource(_scope, _count, count * 3);
  };
};
const _onClick3 = _scope => {
  const {
    count
  } = _scope;
  return function () {
    _queueSource(_scope, _count, count ** 3);
  };
};
const _count_effect = _register("packages/translator-tags/src/__tests__/fixtures/reassignment-expression-counter/template.marko_0_count", _scope => {
  _on(_scope["#button/0"], "click", _onClick(_scope));
  _on(_scope["#button/2"], "click", _onClick2(_scope));
  _on(_scope["#button/4"], "click", _onClick3(_scope));
});
const _count = /* @__PURE__ */_value("count", (_scope, count) => {
  _data(_scope["#text/1"], count);
  _data(_scope["#text/3"], count);
  _data(_scope["#text/5"], count);
  _queueEffect(_scope, _count_effect);
});
export function _setup_(_scope) {
  _count(_scope, 0);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/reassignment-expression-counter/template.marko");