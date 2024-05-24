function createWrapper(a) {
  return {
    a
  };
}
import { on as _on, queueSource as _queueSource, data as _data, value as _value, register as _register, queueEffect as _queueEffect, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _b = (_scope, b) => {
  _data(_scope["#text/2"], b);
};
const _a = /* @__PURE__ */_value("a", (_scope, a) => {
  _data(_scope["#text/1"], a);
  _b(_scope, a);
});
const _pattern_ = /* @__PURE__ */_value("_pattern_", (_scope, _pattern_) => _a(_scope, _pattern_.a));
const _onClick = _scope => {
  const {
    count
  } = _scope;
  return function () {
    _queueSource(_scope, _count, count + 1);
  };
};
const _count_effect = _register("packages/translator-tags/src/__tests__/fixtures/same-source-non-alias/template.marko_0_count", _scope => _on(_scope["#button/0"], "click", _onClick(_scope)));
const _count = /* @__PURE__ */_value("count", (_scope, count) => {
  _queueEffect(_scope, _count_effect);
  _pattern_(_scope, createWrapper(count));
});
const _setup = _scope => {
  _count(_scope, 0);
};
export const _template_ = "<button><!> <!></button>";
export const _walks_ = /* get, next(1), replace, over(2), replace, out(1) */" D%c%l";
export const _setup_ = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/same-source-non-alias/template.marko");