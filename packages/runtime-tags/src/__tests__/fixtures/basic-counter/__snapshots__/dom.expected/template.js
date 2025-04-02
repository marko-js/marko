export const _template = "<div><button> </button></div>";
export const _walks = /* next(1), get, next(1), get, out(2) */"D D m";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _clickCount_effect = _$.effect("__tests__/template.marko_0_clickCount", (_scope, {
  clickCount
}) => _$.on(_scope["#button/0"], "click", function () {
  _clickCount(_scope, clickCount + 1), clickCount;
}));
const _clickCount = /* @__PURE__ */_$.state("clickCount/2", (_scope, clickCount) => {
  _$.data(_scope["#text/1"], clickCount);
  _clickCount_effect(_scope);
});
export function _setup(_scope) {
  _clickCount(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);