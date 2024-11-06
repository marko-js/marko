export const _template_ = "<!><!><div id=tags-api> </div>";
export const _walks_ = /* replace, over(1), next(1), get, out(1) */"D%bD l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _onCount = _$.register("packages/translator-interop/src/__tests__/fixtures/interop-events-tags-to-class/template.marko_0/onCount", _scope => function (newCount) {
  _count(_scope, newCount);
});
import _classCounter from "./components/class-counter.marko";
import "marko/src/runtime/helpers/tags-compat/dom-debug.mjs";
_$.register("packages/translator-interop/src/__tests__/fixtures/interop-events-tags-to-class/components/class-counter.marko", _classCounter);
const _classCounter_input = _$.dynamicTagAttrs("#text/0");
const _dynamicTagName = /* @__PURE__ */_$.conditional("#text/0", _scope => _classCounter_input(_scope, () => ({
  onCount: _onCount(_scope)
})), () => _classCounter_input);
const _count = /* @__PURE__ */_$.state("count", (_scope, count) => _$.data(_scope["#text/1"], count));
export function _setup_(_scope) {
  _count(_scope, 0);
  _dynamicTagName(_scope, _classCounter);
}
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_), "packages/translator-interop/src/__tests__/fixtures/interop-events-tags-to-class/template.marko");