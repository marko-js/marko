import { queueSource as _queueSource, register as _register, bindFunction as _bindFunction, data as _data, dynamicTagAttrs as _dynamicTagAttrs, conditional as _conditional, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
import _classCounter from "./components/class-counter.marko";
import "marko/src/runtime/helpers/tags-compat/dom-debug.mjs";
_register("packages/translator-interop/src/__tests__/fixtures/interop-events-tags-to-class/components/class-counter.marko", _classCounter);
const _temp = _register("packages/translator-interop/src/__tests__/fixtures/interop-events-tags-to-class/template.marko_0/anonymous", function (_scope, newCount) {
  _queueSource(_scope, _count, newCount);
});
const _classCounter_input = _dynamicTagAttrs("#text/0");
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0", _scope => _classCounter_input(_scope, () => ({
  onCount: /* @__PURE__ */_bindFunction(_scope, _temp)
})), void 0, _classCounter_input);
const _count = /* @__PURE__ */_value("count", (_scope, count) => _data(_scope["#text/1"], count));
const _setup = _scope => {
  _count(_scope, 0);
  _dynamicTagName(_scope, _classCounter);
};
export const template = "<!><!><div id=tags-api> </div>";
export const walks = /* replace, over(1), next(1), get, out(1) */"D%bD l";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-interop/src/__tests__/fixtures/interop-events-tags-to-class/template.marko");