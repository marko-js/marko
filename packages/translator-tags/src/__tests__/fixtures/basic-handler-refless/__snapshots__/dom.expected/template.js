export const _template_ = "<button> </button>";
export const _walks_ = /* get, next(1), get, out(1) */" D l";
import { on as _on, data as _data2, queueSource as _queueSource, value as _value, register as _register, queueEffect as _queueEffect, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _data = /* @__PURE__ */_value("data", (_scope, data) => _data2(_scope["#text/1"], data));
const _setup__effect = _register("packages/translator-tags/src/__tests__/fixtures/basic-handler-refless/template.marko_0", _scope => _on(_scope["#button/0"], "click", function () {
  _queueSource(_scope, _data, 1);
}));
export function _setup_(_scope) {
  _queueEffect(_scope, _setup__effect);
  _data(_scope, 0);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/basic-handler-refless/template.marko");