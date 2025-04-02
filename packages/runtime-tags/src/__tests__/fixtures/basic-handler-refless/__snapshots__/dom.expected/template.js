export const _template = "<button> </button>";
export const _walks = /* get, next(1), get, out(1) */" D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _data = /* @__PURE__ */_$.state("data/2", (_scope, data) => _$.data(_scope["#text/1"], data));
const _setup_effect = _$.effect("__tests__/template.marko_0", _scope => _$.on(_scope["#button/0"], "click", function () {
  _data(_scope, 1);
}));
export function _setup(_scope) {
  _data(_scope, 0);
  _setup_effect(_scope);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);