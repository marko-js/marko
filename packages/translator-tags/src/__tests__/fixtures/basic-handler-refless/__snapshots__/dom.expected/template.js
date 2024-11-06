export const _template_ = "<button> </button>";
export const _walks_ = /* get, next(1), get, out(1) */" D l";
import { on as _on, data as _data2, state as _state, effect as _effect, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _data = /* @__PURE__ */_state("data", (_scope, data) => _data2(_scope["#text/1"], data));
const _setup__effect = _effect("packages/translator-tags/src/__tests__/fixtures/basic-handler-refless/template.marko_0", _scope => _on(_scope["#button/0"], "click", function () {
  _data(_scope, 1);
}));
export function _setup_(_scope) {
  _setup__effect(_scope);
  _data(_scope, 0);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/basic-handler-refless/template.marko");